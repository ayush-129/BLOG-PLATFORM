import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

class AuthService {
  constructor() {
    this.client = new Client();
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return await this.login({ email, password }); // Automatically log in user after account creation
      } else {
        return userAccount; // Return userAccount if needed
      }
    } catch (error) {
      console.error('Appwrite service :: createAccount :: error', error);
      throw error; // Rethrow error for handling in calling code
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error('Appwrite service :: login :: error', error);
      throw error; // Rethrow error for handling in calling code
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error('Appwrite service :: getCurrentUser :: error', error);
      throw error; // Rethrow error for handling in calling code
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error('Appwrite service :: logout :: error', error);
      throw error; // Rethrow error for handling in calling code
    }
  }
}

const authService = new AuthService();

export default authService;
