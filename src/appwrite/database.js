import config from "../config/config"
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
  client = new Client();
  databases;
  bucket;
  constructor(){
         this.client
         .setEndpoint(config.appwrite_end_url) 
        .setProject(config.appwrite_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
  }
  async createPost ({title, slug , content, featuredImage, status , userId}){
      try {
        const promise = this.databases.createDocument(
            config.appwrite_DATABASE_ID,
            config.appwrite_COLLECTION_ID,
            slug,
            { title,
              content,
              featuredImage,
              status,
              userId
             }
        );
        return promise;
      } catch (error) {
        throw error;
      }
  }
  async updatePost(slug ,{title, content, featuredImage, status}){
        try {
            const result = await databases.update(
                config.appwrite_DATABASE_ID,
                config.appwrite_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
            return result;
        } catch (error) {
            throw error
        }
  }
  async deletePost(slug){
              try {
                const delete_post = await this.databases.deleteDocument(
                    config.appwrite_DATABASE_ID,
                    config.appwrite_COLLECTION_ID,
                    slug
                )
                return true;
              } catch (error) {
                console.log(`error in delete post function and the error is : ${error}`);
                return false;
              }
  }
  async getPost(slug){
        try {
          return await this.databases.getDocument(
            config.appwrite_DATABASE_ID,
                    config.appwrite_COLLECTION_ID,
                    slug
          )
        } catch (error) {
          console.log(`error in GET post function and the error is : ${error}`);
          return false;
        }
  }
  async getPosts(queries = [Query.equal("status", "active")]){
    try {
      return await this.databases.listDocuments(
        config.appwrite_DATABASE_ID,
        config.appwrite_COLLECTION_ID,
        queries,
        
      )
    } catch (error) {
      console.log(`error in GET posts function and the error is : ${error}`);
      return false;
    }
  }
  async uploadFile(file){
        try {
          return await this.bucket.createFile(
            config.appwrite_BUCKET_ID,
            ID.unique(),
            file
          )
        } catch (error) {
          console.log(`error:${error}`);
          return false;
        }
  }
  async deleteFile(fileID){
          try {
             return await this.bucket.deleteFile(
              config.appwrite_BUCKET_ID,
              fileID
            )
          } catch (error) {
            console.log(`error is : ${error}`);
            return false;
          }
  }
  getfilePreview(fileID){
     return this.bucket.getFilePreview(
      config.appwrite_BUCKET_ID,
      fileID
     )
  }
}



const service = new Service();
export default service;