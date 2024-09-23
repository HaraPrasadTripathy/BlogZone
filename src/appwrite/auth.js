import config from '../config/config';
import { Client, Account, ID } from "appwrite";

 export class AuhthService{
    client =  new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl);
        this.client.setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){ //SignUp Function
        try {
            const userAccount = await this.account.create(ID.unique(), email, password,name);
            if(userAccount){
              // call login method
              return this.login({email, password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) { //Login Function      
        try{
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const auhthServiceObj = new AuhthService();

export default auhthServiceObj