// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../appwrite/db";
// import { Button, Container } from "../components";
// import parse from "html-react-parser";
// import { useSelector } from "react-redux";

// export default function Post() {
//     const [post, setPost] = useState(null);
//     const { slug } = useParams();
//     const navigate = useNavigate();

//     const userData = useSelector((state) => state.auth.userData);
//     const isAuthor = post && userData ? post.userId === userData.$id : false;
//     console.log(userData);

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if(post) setPost(post);
//                 else navigate("/");
//             });
//         } else navigate("/");
//     }, [slug, navigate]);


//     const deletePost = () => {
//         appwriteService.deletePost(post.$id).then((status) => {
//             if (status) {
//                 appwriteService.deleteFile(post.imageId);
//                 navigate("/");
//             }
//         });
//     };
    

//     return post ? (
//         <div className="py-8">
//             <Container>
//                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
//                     <img
//                         src={appwriteService.getFilePreview(post.imageId)}
//                         alt={post.title}
//                         className="rounded-xl"
//                     />

//                     {isAuthor && (
//                         <div className="absolute right-6 top-6">
//                             <Link to={`/edit-post/${post.$id}`}>
//                                 <Button bgColor="bg-green-500" className="mr-3" btnText="Edit">
//                                 </Button>
//                             </Link>
//                             <Button bgColor="bg-red-500" onClick={deletePost} btnText="Delete">
//                             </Button>
//                         </div>
//                     )}  
//                 </div>
//                 <div className="w-full mb-6 text-center">
//                     <h1 className="text-2xl font-bold">{post.title}</h1>
//                 </div>
//                 <div className="browser-css text-center">
//                     {parse(post.content)}
//                     </div>
//             </Container>
//         </div>
//     ) : null;
// }




import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/db";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const darkMode = useSelector((state) => state.auth.darkMode);

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;
    console.log(userData);

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);


    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.imageId);
                toast.success("Post Successfully Deleted");
                setTimeout(() => {
                    navigate("/");
                }, 2000); 
            }else{
                toast.error("Failed to Delete Post");
            }
        });
    };
    
    
    
    return post ? (
        <div className={`py-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.imageId)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3" btnText="Edit">
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} btnText="Delete">
                            </Button>
                        </div>
                    )}  
                </div>
                <div className="w-full mb-6 text-center">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css text-center">
                    {parse(post.content)}
                    </div>

                    <ToastContainer 
            theme='colored'                    //{ `${darkMode ? 'light' : 'dark'}`}
            position='top-center'
            autoClose={1600}
            />
            </Container>
        </div>
    ) : null;
}