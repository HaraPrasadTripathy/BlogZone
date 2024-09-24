// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "../index";
// import appwriteService from "../../appwrite/db";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

//     const submit = async (data) => {
//         console.log(data);
//         if (post) {
//             const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//             if (file) {
//                 appwriteService.deleteFile(post.imageId);
//             }

//             const dbPost = await appwriteService.updatePost(post.$id, {
//                 ...data,
//                 imageId: file ? file.$id : undefined,
//             });

//             if (dbPost) {
//                 console.log("Hello");
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         } else {
//             const file = await appwriteService.uploadFile(data.image[0]);

//             if (file) {
//                 const fileId = file.$id;
//                 data.imageId = fileId;
//                 const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`);
//                 }
//             }
//         }
//     };
    

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.imageId)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Select
//                     options={["Nature", "Sports", "Electronics", "Food", "Politics","Travel", "Fitness","Technology","Films"]}
//                     label="Category"
//                     className="mb-4"
//                     {...register("Category", { required: false })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} btnText={post ? "Update" : "Submit"} className="w-full ">
//                 </Button>
//             </div>
//         </form>
//     );
// }




























//----------------------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "../index";
// import appwriteService from "../../appwrite/db";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function PostForm({ post }) {
//     const darkMode = useSelector((state) => state.auth.darkMode);
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//             category: post?.category || "Other",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

//     const submit = async (data) => {
//         console.log(data);
//         if (post) {
//             const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//             if (file) {
//                 appwriteService.deleteFile(post.imageId);
//             }

//             const dbPost = await appwriteService.updatePost(post.$id, {
//                 ...data,
//                 imageId: file ? file.$id : undefined,
//             });

//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         } else {
//             const file = await appwriteService.uploadFile(data.image[0]);

//             if (file) {
//                 const fileId = file.$id;
//                 data.imageId = fileId;
//                 const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`);
//                 }
//             }
//         }
//     };
    

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className={`mb-4 w-full ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className={`mb-4 w-full ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className={`mb-4 w-full ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.imageId)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className={`mb-4 ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
//                     {...register("status", { required: true })}
//                 />
//                 <Select
//                     options={["Nature", "Sports", "Electronics", "Food", "Politics","Travel", "Fitness","Technology","Films","Other"]}
//                     label="Category"
//                     className={`mb-4 ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
//                     {...register("category", { required: false })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} btnText={post ? "Update" : "Submit"} className="w-full ">
//                 </Button>
//             </div>
//         </form>
//     );
// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------
















import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/db";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UploadLoader from "../UploadLoader";
import '../../App.css'

export default function PostForm({ post }) {
    const [loading, setLoading] = useState(false);
    const darkMode = useSelector((state) => state.auth.darkMode);
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
            category: post?.category || "Other",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        setLoading(true);
        console.log(data);
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.imageId);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                imageId: file ? file.$id : undefined,
            });

            if (dbPost) {
                setLoading(false);
                setTimeout(() => {
                    navigate(`/post/${dbPost.$id}`);
                }, 2000); 
            }else{
                setTimeout(()=>{
                    setLoading(false);  
                },1500)
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.imageId = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    setLoading(false);
                    setTimeout(() => {
                        navigate(`/post/${dbPost.$id}`);
                    }, 2000); 
                }else{
                    setLoading(false);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <>
            {loading && <UploadLoader/>}
            <form onSubmit={handleSubmit(submit)} className={`flex flex-wrap ${loading ? "content-blur" : ""}`}>
                <div className="w-2/3 px-2">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className={`mb-4 w-full ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Slug"
                        className={`mb-4 w-full ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                </div>
                <div className="w-1/3 px-2">
                    <Input
                        label="Featured Image :"
                        type="file"
                        className={`mb-4 w-full ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full mb-4">
                            <img
                                src={appwriteService.getFilePreview(post.imageId)}
                                alt={post.title}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className={`mb-4 ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
                        {...register("status", { required: true })}
                    />
                    <Select
                        options={["Nature", "Sports", "Electronics", "Food", "Politics","Travel", "Fitness","Technology","Films","Other"]}
                        label="Category"
                        className={`mb-4 ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'}`}
                        {...register("category", { required: false })}
                    />
                    <Button type="submit" bgColor={post ? "bg-green-500" : undefined} btnText={post ? "Update" : "Submit"} className="w-full ">
                    </Button>
                </div>
            </form>
            
            <ToastContainer 
            theme='colored'                  
            position='top-center'
            autoClose={1600}
            />
        </>
    );
}




