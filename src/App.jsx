import { useState , useEffect } from 'react'
import './App.css'
import './index.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import {login , logout} from './store/authSlice'
import header from './components/header/header'
import footer from './components/footer/footer'
function App() {
        const [loading , setloading] = useState(true);
        const dispatch = useDispatch();
        useEffect(() =>{
          authService.currentUser()
          .then((userData) => {
            if(userData){
              dispatch(login(userData))
            }else{
              dispatch(logout())
            }
          })
          .finally(() => setloading(false))
          
        }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <header />
        
        <footer />
      </div>
    </div>
  ) : null;
}

export default App
