import React from 'react'
import appwriteService from "../appwrite/db"
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

function PostCard({$id, title, imageId}) {
 const darkMode = useSelector((state) => state.auth.darkMode);
    
  return (
    <Link to={`/post/${$id}`}>
        <div className= {`w-full rounded-md p-3 text-gray-900 my-4 ${darkMode ? 'bg-gray-500 ' : 'bg-white'}`}>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(imageId)} alt={title}  className='rounded-md w-full h-40 object-cover'/>
            </div>
            <h2 className='text-xl font-bold text-center'>{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard