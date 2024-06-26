const config = {
    appwrite_end_url : String(import.meta.env.VITE_APPWRITE_ENDPOINT_URL),
    appwrite_PROJECT_ID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_DATABASE_ID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwrite_COLLECTION_ID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_BUCKET_ID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config
