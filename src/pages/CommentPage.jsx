// import React, { useEffect, useState } from 'react';
// import ContactForm from '../components/ContactForm';
// import '../App.css';

// const CommentPage = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//      <div className='h-[39.5rem]'>
//       <div className='h-[100%] relative bg-fixed bg-center bg-cover' style={{ backgroundImage: "url('travel-hd-2560x1440.jpg')" }}>
//       <div className='h-[70%] w-full flex items-center justify-center'>
//         <div className='absolute top-1/2 left-16 transform -translate-y-1/2 w-[55%] flex items-center'>
//           <p className={`text-9xl font-extrabold text-white ${isVisible ? 'fade-in' : ''}`}>
//             Let's Connect
//           </p>
//         </div>
//       </div>
//       </div>
//      </div>

//      <ContactForm/>
//     </div>
//   );
// };

// export default CommentPage;







import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import '../App.css';

const CommentPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div className='h-[39.5rem] overflow-hidden relative'>
        <div
          className='h-full w-full bg-fixed bg-center bg-cover'
          style={{
            backgroundImage: "url('travel-hd-2560x1440.jpg')",
            transform: `translateY(${scrollY * 0.5}px)` 
          }}
        ></div>
        <div className='h-[95%] w-full flex items-center justify-center absolute top-0'>
          <div className='absolute top-1/2 left-16 transform -translate-y-1/2 w-[55%] flex items-center'>
            <p className={`text-9xl font-extrabold text-white ${isVisible ? 'fade-in' : ''}`}>
              Let's Connect
            </p>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default CommentPage;






// import React, { useEffect, useState } from 'react';
// import '../App.css';

// const CommentPage = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300); // Delay before the text appears

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className='h-screen relative'>
//       {/* Image Section */}
//       <div className='CommentImgClass h-[70%] w-full'>
//         <img 
//           src="travel-hd-2560x1440.jpg" 
//           alt="ConnectImg" 
//           className='w-full h-[100%] object-cover'
//         />
//       </div>

//       <div className='absolute top-0 left-16 w-[55%] h-[70%] flex items-center'>
//         <p className={`text-9xl font-extrabold text-white ${isVisible ? 'fade-in' : ''}`}>
//           Let's Connect
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CommentPage;
