import React from 'react'
import { useSelector } from "react-redux";
import { Container, PostForm } from '../components'

function AddPost() {
  const darkMode = useSelector((state) => state.auth.darkMode);
  return (
    <div className={`py-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost