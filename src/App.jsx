import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/header/header'; // Adjust casing
import Footer from './components/footer/footer'; // Adjust casing

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.currentUser();
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
        dispatch(logout()); // Handle logout or error state accordingly
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]); // Added dispatch as dependency

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header /> {/* Corrected component casing */}
        
        <Footer /> {/* Corrected component casing */}
      </div>
    </div>
  ) : null;
}

export default App;
