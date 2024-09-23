import React from 'react'
import { Signup as SignupComponent } from '../components'
import { useSelector } from "react-redux";

function Signup() {
  const darkMode = useSelector((state) => state.auth.darkMode)

  const backgroundStyleLight = {
    backgroundImage: 'url(image1.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
  };

  const backgroundStyleDark = {
    backgroundImage: 'url(DarkImage.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
  };
  
  return (
    <div className='py-8' style={darkMode?backgroundStyleDark:backgroundStyleLight}>
      <SignupComponent/>
    </div>
  )
}

export default Signup