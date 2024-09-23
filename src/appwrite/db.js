// import config from '../config/config.js';
// import { Client, ID, Databases, Storage, Query } from "appwrite";

// export class Service{
//     client = new Client();
//     databases;
//     bucket; //storage
    
//     constructor(){
//         this.client
//         .setEndpoint(config.appwriteUrl)
//         .setProject(config.appwriteProjectId);
//         this.databases = new Databases(this.client);
//         this.bucket = new Storage(this.client);
//     }

//     async createPost({title, slug, content, imageId, status, userId}){
//         try {
//             console.log(content)
//             return await this.databases.createDocument(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     imageId,
//                     status,
//                     userId,
//                 }
//             )
//         } catch (error) {
//             console.log("Appwrite serive :: createPost :: error", error);
//         }
//     }

//     async updatePost(slug, {title, content, imageId, status}){
//         try {
//             return await this.databases.updateDocument(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     imageId,
//                     status,
//                 }
//             )
//         } catch (error) {
//             console.log("Appwrite serive :: updatePost :: error", error);
//         }
//     }

//     async deletePost(slug){
//         try {
//             await this.databases.deleteDocument(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 slug
//             )
//             return true
//         } catch (error) {
//             console.log("Appwrite serive :: deletePost :: error", error);
//             return false
//         }
//     }

//     async getPost(slug){
//         try {
//             return await this.databases.getDocument(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 slug
//             )
//         } catch (error) {
//             console.log("Appwrite serive :: getPost :: error", error);
//             return false
//         }
//     }

//     async getPosts(queries = [Query.equal("status", "active")]){
//         try {
//             return await this.databases.listDocuments(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 queries,
//             )
//         } catch (error) {
//             console.log("Appwrite service :: getPosts :: error", error);
//             return false
//         }
//     }

//     // file upload service

//     async uploadFile(file){
//         try {
//             return await this.bucket.createFile(
//                 config.appwriteBucketId,
//                 ID.unique(),
//                 file
//             )
//         } catch (error) {
//             console.log("Appwrite serive :: uploadFile :: error", error);
//             return false
//         }
//     }

//     async deleteFile(fileId){
//         try {
//             await this.bucket.deleteFile(
//                 config.appwriteBucketId,
//                 fileId
//             )
//             return true
//         } catch (error) {
//             console.log("Appwrite serive :: deleteFile :: error", error);
//             return false
//         }
//     }

//     getFilePreview(fileId){
//         return this.bucket.getFilePreview(
//             config.appwriteBucketId,
//             fileId
//         )
//     }
// }

// const service = new Service()
// export default service
















// import config from '../config/config.js';
// import { toast } from 'react-toastify';
// import { Client, ID, Databases, Storage, Query } from "appwrite";

// export class Service {
//     client = new Client();
//     databases;
//     bucket; // storage
    
//     constructor() {
//         this.client
//             .setEndpoint(config.appwriteUrl)
//             .setProject(config.appwriteProjectId);
//         this.databases = new Databases(this.client);
//         this.bucket = new Storage(this.client);
//     }

//     async createPost({ title, slug, content, imageId, status, userId, category }) {
//         try {
//             if (content.length > 5000) {
//                 toast.error("Content Exceeds 5000 Characters");
//                 throw new Error("Content exceeds the 5000 character limit.");
//             }

//             return await this.databases.createDocument(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     imageId,
//                     status,
//                     userId,
//                     category,
//                 }
//             );
//             toast.success("Blog Successfully Added");
//         } catch (error) {
//             toast.error(error);
//             console.log("Appwrite service :: createPost :: error", error);
//         }
//     }

//     async updatePost(slug, { title, content, imageId, status, category }) {
//         try {
//             if (content.length > 5000) {
//                 throw new Error("Content exceeds the 5000 character limit.");
//             }

//             return await this.databases.updateDocument(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     imageId,
//                     status,
//                     category,
//                 }
//             );
//         } catch (error) {
//             console.log("Appwrite service :: updatePost :: error", error);
//         }
//     }

//     async deletePost(slug) {
//         try {
//             await this.databases.deleteDocument(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 slug
//             );
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deletePost :: error", error);
//             return false;
//         }
//     }

//     async getPost(slug) {
//         try {
//             return await this.databases.getDocument(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 slug
//             );
//         } catch (error) {
//             console.log("Appwrite service :: getPost :: error", error);
//             return false;
//         }
//     }

//     async getPosts(queries = [Query.equal("status", "active")]) {
//         try {
//             return await this.databases.listDocuments(
//                 config.appwriteDatabaseId,
//                 config.appwriteCollectionId,
//                 queries,
//             );
//         } catch (error) {
//             console.log("Appwrite service :: getPosts :: error", error);
//             return false;
//         }
//     }

//     // File upload service
//     async uploadFile(file) {
//         try {
//             return await this.bucket.createFile(
//                 config.appwriteBucketId,
//                 ID.unique(),
//                 file
//             );
//         } catch (error) {
//             console.log("Appwrite service :: uploadFile :: error", error);
//             return false;
//         }
//     }

//     async deleteFile(fileId) {
//         try {
//             await this.bucket.deleteFile(
//                 config.appwriteBucketId,
//                 fileId
//             );
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deleteFile :: error", error);
//             return false;
//         }
//     }

//     getFilePreview(fileId) {
//         return this.bucket.getFilePreview(
//             config.appwriteBucketId,
//             fileId
//         );
//     }
// }

// const service = new Service();
// export default service;



















import config from '../config/config.js';
import { toast } from 'react-toastify';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket; // storage
    
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, imageId, status, userId, category }) {
        try {
            if (content.length > 5000) {
                toast.error("Content Exceeds 5000 Characters");
                throw new Error("Content exceeds the 5000 character limit.");
            }

            const response = await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    imageId,
                    status,
                    userId,
                    category,
                }
            );

            toast.success("Blog Successfully Added");
            return response;
        } catch (error) {
            toast.error("An error occurred while creating the post");
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, imageId, status, category }) {
        try {
            if (content.length > 5000) {
                toast.error("Content Exceeds 5000 Characters");
                throw new Error("Content exceeds the 5000 character limit.");
            }

            const response = await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    imageId,
                    status,
                    category,
                }
            );

            toast.success("Post Successfully Updated");
            return response; 
        } catch (error) {
            toast.error("An error occurred while updating the post");
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            const post = await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return post;
        } catch (error) {
            toast.error("An error occurred while retrieving the post");
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            );
            return posts;
        } catch (error) {
            toast.error("An error occurred while retrieving posts");
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    // File upload service
    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );

            return response; 
        } catch (error) {
            toast.error("An error occurred while uploading the file");
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        );
    }
}

const service = new Service();
export default service;
