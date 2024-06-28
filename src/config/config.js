const config = {
    appwrite_end_url: import.meta.env.VITE_APPWRITE_ENDPOINT_URL,
    appwrite_PROJECT_ID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwrite_DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwrite_COLLECTION_ID: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    appwrite_BUCKET_ID: import.meta.env.VITE_APPWRITE_BUCKET_ID,
  };
  
  console.log("Config values:", config);
  
  export default config;
  