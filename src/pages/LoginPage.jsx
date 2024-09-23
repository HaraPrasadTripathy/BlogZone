import React from 'react'
import { Login as LoginComponent } from '../components'
import { useSelector } from "react-redux";

function Login() {
  const darkMode = useSelector((state) => state.auth.darkMode)

  const backgroundStyleLight = {
    backgroundImage: 'url(wp8388339.webp)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
  };

  const backgroundStyleDark = {
    backgroundImage: 'url(9092263.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
  };

  return (
    <div style={darkMode?backgroundStyleDark:backgroundStyleLight} >
      <LoginComponent/>
    </div>
  )
}

export default Login