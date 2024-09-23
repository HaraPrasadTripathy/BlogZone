import React from 'react'
import {useDispatch} from 'react-redux'
import authServiceObj from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authServiceObj.logout().then(() => {
          dispatch(logout())
          navigate("/")
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-lg'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
