import {Client, Account, Databases, Storage, Avatars} from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_API_URL,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,    
    savesCollectionId: import.meta.env.VITE_SAVES_Collection_ID,
    postsCollectionId: import.meta.env.VITE_POSTS_COLLECTION_ID,
    usersCollectionId: import.meta.env.VITE_USERS_COLLECTION_ID,
    
}



export const client = new Client();

export function setup(){
client.setEndpoint(appwriteConfig.url); 
client.setProject(appwriteConfig.projectId); 

}
client.setEndpoint(appwriteConfig.url); 
client.setProject(appwriteConfig.projectId); 

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
