// import React from 'react'
// import {Container, Logo, LogoutBtn } from '../index'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const Header = () => {

//   const authStatus = useSelector((state)=>state.auth.status)
//   const navigate = useNavigate()
//   const navItems = [
//     {
//       name: 'Home',
//       url: "/",
//       active: true
//     }, 
//     {
//       name: "Login",
//       url: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       url: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       url: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       url: "/add-post",
//       active: authStatus,
//   },
//   {
//     name: "Contact Us",
//     url: "/contact-us",
//     active: true,
// },
//   ]

//   return (
//     <header className='py-3 shadow bg-gray-500 sticky top-0 z-50'>
//       <Container >
//         <nav className='flex'>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px'/>
//             </Link>
//           </div>
//           <ul className='flex ml-auto my-1'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.url)}
//                 className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-lg'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )
// }

// export default Header












import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { toggleDarkMode} from '../../store/authSlice' ; 


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const darkMode = useSelector((state) => state.auth.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navItems = [
    {
            name: 'Home',
            url: "/",
            active: true
          }, 
          {
            name: "Login",
            url: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            url: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            url: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            url: "/add-post",
            active: authStatus,
        },
        {
          name: "Contact Us",
          url: "/contact-us",
          active: true,
      },
  ];

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header className='py-2 shadow bg-gray-500 sticky top-0 z-50'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto my-1 text-black'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.url)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-lg'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            <li>
              <button
                onClick={handleDarkModeToggle}
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-lg'
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>
            </li>
          </ul>
        </nav>
        
      </Container>
    </header>
  );
};

export default Header;

