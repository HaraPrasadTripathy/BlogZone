// import React, {useState, useEffect} from 'react'
// import { Container, PostCard } from '../components'
// import appwriteService from "../appwrite/db";
// import { useSelector } from 'react-redux';

// function AllPosts() {
//     const authStatus = useSelector((state)=>state.auth.status)
//     const [posts, setPosts] = useState([])
//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//             console.log(posts)
//         }
//     })
//     if (posts.length === 0) {
//         return (
//             <div className="w-full  mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap" style={{ height:"50vh"}}>
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 {authStatus?"No Blogs Available":null}
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//          </Container>
//     </div>
//   )
// }

// export default AllPosts

// import React, { useState, useEffect } from 'react';
// import { Container, PostCard } from '../components';
// import appwriteService from '../appwrite/db';
// import { useSelector } from 'react-redux';

// function AllPosts() {
//     const darkMode = useSelector((state) => state.auth.darkMode);
//     const authStatus = useSelector((state) => state.auth.status);
//     const [posts, setPosts] = useState([]);
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         appwriteService.getPosts([]).then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents);
//                 // Extract categories from posts and replace 'Other' or null with 'Miscellaneous'
//                 const postCategories = posts.documents.reduce((acc, post) => {
//                     const category = post.category === 'Other' || !post.category ? 'Miscellaneous' : post.category;
//                     if (!acc.includes(category)) {
//                         acc.push(category);
//                     }
//                     return acc;
//                 }, []);

//                 // Ensure 'Miscellaneous' is placed last
//                 setCategories(postCategories.filter(cat => cat !== 'Miscellaneous').concat('Miscellaneous'));
//             }
//         });
//     }, []);

//     if (posts.length === 0) {
//         return (
//             <div className= {` w-full mt-4 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//                 <Container>
//                     <div className="flex flex-wrap" style={{ height: "50vh" }}>
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 {authStatus ? "No Blogs Available" : null}
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className={`w-full py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}>
//             <Container>
//                 <nav className="mb-12">
//                     <ul className={`flex justify-start space-x-4 my-3  p-2 rounded-lg ${darkMode ? 'bg-orange-400 text-white' : 'bg-lime-300 text-gray-900'}`}>
//                         {categories.map((category) => (
//                             <li key={category}>
//                                 <a
//                                     href={`#${category}`}
//                                     className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-gray-900 rounded-full text-lg"
//                                     style={{ scrollBehavior: 'smooth' }}
//                                 >
//                                     {category}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>

//                 {categories.map((category) => (
//                     <div key={category} id={category} className="mb-8">
//                         <h2 className="text-2xl font-bold mb-4 px-2">{category}</h2>
//                         <div className="flex flex-wrap">
//                             {posts
//                                 .filter((post) => (post.category === 'Other' || !post.category ? 'Miscellaneous' : post.category) === category)
//                                 .map((post) => (
//                                     <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/4">
//                                         <PostCard {...post} />
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>
//                 ))}
//             </Container>
//         </div>
//     );
// }

// export default AllPosts;









import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/db";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

function AllPosts() {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        // Extract categories from posts and replace 'Other' or null with 'Miscellaneous'
        const postCategories = posts.documents.reduce((acc, post) => {
          const category =
            post.category === "Other" || !post.category
              ? "Miscellaneous"
              : post.category;
          if (!acc.includes(category)) {
            acc.push(category);
          }
          return acc;
        }, []);

        // Ensure 'Miscellaneous' is placed last
        setCategories(
          postCategories
            .filter((cat) => cat !== "Miscellaneous")
            .concat("Miscellaneous")
        );
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div >
        {authStatus ? <Loader /> : "No Blogs Available"}
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <nav className="mb-12">
          <ul
            className={`flex justify-start space-x-4 my-3  p-2 rounded-md ${
              darkMode ? "bg-cyan-700 text-white" : "bg-blue-300 text-gray-900"
            }`}
          >
            {categories.map((category) => (
              <li key={category}>
                <a
                  href={`#${category}`}
                  className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-gray-900 rounded-full text-lg"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {categories.map((category) => (
          <div key={category} id={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 px-2">{category}</h2>
            <div className="flex flex-wrap">
              {posts.filter((post) =>(post.category === "Other" || !post.category ? "Miscellaneous" : post.category) === category)
                .map((post) => (
                  <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/4">
                    <div
                     className={`transform transition-transform duration-300 ease-in-out shadow-md rounded-lg 
                        hover:shadow-2xl hover:-translate-y-1 
                        ${darkMode ? 'hover:shadow-lg hover:shadow-black' : 'hover:shadow-lg hover:shadow-gray-700'}`}
                    >
                      <PostCard {...post} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default AllPosts;
