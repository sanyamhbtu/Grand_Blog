import config from "../config"
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client(); 
    account;
    constructor(){
        this.client
        .setEndpoint(config.appwrite_end_url) 
        .setProject(config.appwrite_PROJECT_ID);
        this.account = new Account(this.client)
    }
    async createAccount({email , password , name}){
        try {
            const userAccount = await this.account.create(ID.unique() ,email, password, name);
            if (userAccount) {
                // calling another function and direct logining into the account
                return this.login({email , password});
                
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}){
        try {
            return this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            return error;
        }
    }
    async currentUser(){
      try {
        const user = await this.account.get();
        return user;
      } catch (error) {
        return error;
      }
      return null;
    }
    async logOut (){
        try {
            const result = await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}
const authService = new AuthService();
export default authService;
