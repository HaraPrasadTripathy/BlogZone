// import React, {useEffect, useState} from 'react'
// import appwriteService from "../appwrite/db";
// import {Container, PostCard} from '../components'
// import { useSelector } from 'react-redux'

// function Home() {
//     const authStatus = useSelector((state)=>state.auth.status)
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])

//     if (posts.length == 0) {
//         return (
//             <div className="w-full  mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap" style={{ height:"50vh"}}>
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 {authStatus?"No Blogs Available":" Login to read posts"}
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Home


















// import React, { useEffect, useState } from "react";
// import { Container, PostCard } from "../components";
// import { useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import '../App.css'


// function Home() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const darkMode = useSelector((state) => state.auth.darkMode);
//   const navigate = useNavigate(); 

//   return (
//     <div className={`w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
//       {/* Hero Section with Conditional Background */}
//       <section className={`w-full py-16 ${darkMode ? 'bg-teal-900' : 'bg-gray-700'} text-center`}>
//         <Container>
//           <h1 className= "text-5xl font-bold mb-2 text-white typewriter">
//             Welcome to Your Blog Space
//           </h1>
//           <p className="text-white">
//             Share your stories, discover new perspectives, and connect with
//             others.
//           </p>
//           {authStatus && (
//             <button
//               onClick={() => navigate("/add-post")}
//               className="mt-6 px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600"
//             >
//               Create Your New Blog
//             </button>
//           )}
//         </Container>
//       </section>

//       {/* Section 1 */}
//       <section className={`w-full py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
//         <Container>
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 p-4">
//               <img
//                 src="pexels-ivan-samkov-4240511.jpg"
//                 alt="Image Description"
//                 className="w-full rounded-lg"
//                 style={{ height: "33.5rem" }}
//               />
//             </div>
//             <div className="md:w-1/2 p-4">
//               <h2 className="text-4xl font-bold mb-4">Start with Your Brand</h2>
//               <p className="text-xl mb-4">
//                 Blogging provides a powerful platform for individuals to share
//                 their stories, ideas, and passions with the world. To make your
//                 blog stand out in the crowded digital landscape, establishing a
//                 strong brand is essential.
//               </p>
//               <p className="text-xl mb-4">
//                 Begin with a blog logo that embodies your unique voice and
//                 appeals to your target audience. A professional, well-designed
//                 logo not only enhances the visual appeal of your blog but also
//                 establishes credibility and fosters a deeper connection with
//                 your readers. Your logo is often the first impression readers
//                 will have of your blog.
//               </p>
//               <p className="text-xl ">
//                 Whether you're launching a new blog or refining an existing one,
//                 creating a distinctive brand identity through thoughtful design
//                 and messaging will set you apart from the competition.
//               </p>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Section 2 */}
//       <section className={`w-full py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
//         <Container>
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 p-4 order-2 md:order-1">
//               <h2 className="text-4xl font-bold mb-4">
//                 Customize Your Blog Logo Design
//               </h2>
//               <p className="text-xl mb-4">
//                 With the right tools, customizing your blog's logo is a breeze.
//                 Whether you’re a food blogger sharing culinary delights, a tech
//                 enthusiast exploring the latest innovations, or a citizen
//                 journalist reporting on critical issues, you can find a design
//                 that perfectly aligns with your brand’s identity.
//               </p>
//               <p className="text-xl">
//                 Keep your blog above the fold with a logo designed to capture
//                 attention and resonate with your audience. A well-crafted logo
//                 not only enhances your blog's visual appeal but also strengthens
//                 brand recognition and professionalism. By investing in a
//                 distinctive and memorable logo, you ensure that your blog stands
//                 out and leaves a lasting impression on your readers.
//               </p>
//             </div>
//             <div className="md:w-1/2 p-4 order-1 md:order-2">
//               <img
//                 src="pexels-drew-williams-1285451-3098619.jpg"
//                 alt="Image Description"
//                 className="w-full h-auto rounded-lg"
//                 style={{ height: "32rem" }}
//               />
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Section 3 */}
//       <section className={`w-full py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
//         <Container>
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 p-4">
//               <img
//                 src="giphy 1.gif"
//                 alt="Content Creation"
//                 className="w-full rounded-lg"
//                 style={{ height: "33rem" }}
//               />
//             </div>
//             <div className="md:w-1/2 p-4">
//               <h2 className="text-4xl font-bold mb-4">
//                 Create Engaging Content
//               </h2>
//               <p className="text-xl mb-4">
//                 Content is at the heart of every successful blog. Crafting
//                 engaging and valuable content is essential for attracting and
//                 retaining readers. Focus on creating posts that provide
//                 insights, solve problems, or entertain your audience, keeping
//                 them coming back for more.
//               </p>
//               <p className="text-xl mb-4">
//                 Invest time in researching trending topics, optimizing your
//                 posts for search engines, and using compelling visuals to
//                 enhance your content. Regularly updating your blog with fresh
//                 and relevant content will not only boost your blog’s visibility
//                 but also build a loyal readership.
//               </p>
//               <p className="text-xl ">
//                 Remember, a blog’s success is often driven by the quality and
//                 relevance of its content. Prioritize your readers’ needs and
//                 interests, and continuously refine your content strategy to stay
//                 ahead in the competitive blogging landscape.
//               </p>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Community Section */}
//       <section className={`w-full py-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
//         <Container>
//           <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
//           <p className="text-lg mb-6">
//             Connect with fellow bloggers, share your thoughts, and grow
//             together. Whether you’re here to read, write, or simply get
//             inspired, our community is here for you.
//           </p>
//           {!authStatus && (
//             <div>
//               <button
//                 onClick={() => navigate("/signup")}
//                 className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//               >
//                 Sign Up Now
//               </button>
//             </div>
//           )}
//         </Container>
//       </section>
//     </div>
//   );
// }

// export default Home;














import React, { useEffect, useState } from "react";
import { Container } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  const darkMode = useSelector((state) => state.auth.darkMode);
  const navigate = useNavigate();

  const heroImages = ["1287409.jpg", "wallpapersden.com_ai-landscape-2023-digital-art_1952x1120_1.jpg","089bce0b11f9a94c850061e14843f511.jpg","silhouette-man-taking-photos-his-camera-sunset-dramatic-sky-33402796.jpg","1078038.jpg","1431621.jpg","1510186_1.jpg","AdobeStock_296786762-scaled_1.jpeg","pexels-veeterzy-39811_1.jpg"]; 

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full  text-center bg-cover bg-center relative overflow-hidden h-[38.6rem]">
        {/* Image container to handle sliding */}
        <div className="slider-frame">
          <div className="slide-images">
            {heroImages.map((image, index) => (
              <div key={index} className="img-container">
                <img src={image} alt={`Slide ${index + 1}`} style={{ height: '38.6rem' }}/>
              </div>
            ))}
            {/* Duplicate the first image for seamless transition */}
            <div className="img-container">
              <img src={heroImages[0]} alt="Duplicate Slide 1" style={{ height: '38.6rem' }}/>
            </div>
          </div>
        </div>

        {/* Static content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 ">
          <Container>
            <h1 className="text-5xl font-bold mb-2 text-gray-100 typewriter">
              Welcome to Your Blog Zone
            </h1>
            <p className="text-gray-100">
              Share your stories, discover new perspectives, and connect with
              others.
            </p>
              <button
                onClick={() => { authStatus? navigate("/add-post"): navigate("/login")}}
                className="mt-6 px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Create Your New Blog
              </button>
          </Container>
        </div>
      </section>

      {/* Section 1 */}
      <section className="w-full py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img
                src="pexels-ivan-samkov-4240511.jpg"
                alt="Image Description"
                className="w-full rounded-lg"
                style={{ height: "33.5rem" }}
              />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-4xl font-bold mb-4">Start with Your Brand</h2>
              <p className="text-xl mb-4">
                Blogging provides a powerful platform for individuals to share
                their stories, ideas, and passions with the world. To make your
                blog stand out in the crowded digital landscape, establishing a
                strong brand is essential.
              </p>
              <p className="text-xl mb-4">
                Begin with a blog logo that embodies your unique voice and
                appeals to your target audience. A professional, well-designed
                logo not only enhances the visual appeal of your blog but also
                establishes credibility and fosters a deeper connection with
                your readers. Your logo is often the first impression readers
                will have of your blog.
              </p>
              <p className="text-xl ">
                Whether you're launching a new blog or refining an existing one,
                creating a distinctive brand identity through thoughtful design
                and messaging will set you apart from the competition.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2 */}
      <section
        className={`w-full py-16 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
      >
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4 order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-4">
                Customize Your Blog Logo Design
              </h2>
              <p className="text-xl mb-4">
                With the right tools, customizing your blog's logo is a breeze.
                Whether you’re a food blogger sharing culinary delights, a tech
                enthusiast exploring the latest innovations, or a citizen
                journalist reporting on critical issues, you can find a design
                that perfectly aligns with your brand’s identity.
              </p>
              <p className="text-xl">
                Keep your blog above the fold with a logo designed to capture
                attention and resonate with your audience. A well-crafted logo
                not only enhances your blog's visual appeal but also strengthens
                brand recognition and professionalism. By investing in a
                distinctive and memorable logo, you ensure that your blog stands
                out and leaves a lasting impression on your readers.
              </p>
            </div>
            <div className="md:w-1/2 p-4 order-1 md:order-2">
              <img
                src="pexels-drew-williams-1285451-3098619.jpg"
                alt="Image Description"
                className="w-full h-auto rounded-lg"
                style={{ height: "32rem" }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3 */}
      <section className="w-full py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img
                src="giphy 1.gif"
                alt="Content Creation"
                className="w-full rounded-lg"
                style={{ height: "33rem" }}
              />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-4xl font-bold mb-4">
                Create Engaging Content
              </h2>
              <p className="text-xl mb-4">
                Content is at the heart of every successful blog. Crafting
                engaging and valuable content is essential for attracting and
                retaining readers. Focus on creating posts that provide
                insights, solve problems, or entertain your audience, keeping
                them coming back for more.
              </p>
              <p className="text-xl mb-4">
                Invest time in researching trending topics, optimizing your
                posts for search engines, and using compelling visuals to
                enhance your content. Regularly updating your blog with fresh
                and relevant content will not only boost your blog’s visibility
                but also build a loyal readership.
              </p>
              <p className="text-xl ">
                Remember, a blog’s success is often driven by the quality and
                relevance of its content. Prioritize your readers’ needs and
                interests, and continuously refine your content strategy to stay
                ahead in the competitive blogging landscape.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Section */}
      <section
        className={`w-full py-12 ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        } text-center`}
      >
        <Container>
          <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
          <p className="text-lg mb-6">
            Connect with fellow bloggers, share your thoughts, and grow
            together. Whether you’re here to read, write, or simply get
            inspired, our community is here for you.
          </p>
          {!authStatus && (
            <div>
              <button
                onClick={() => navigate("/signup")}
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                Sign Up Now
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}

export default Home;












