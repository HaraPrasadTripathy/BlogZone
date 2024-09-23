import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useSelector } from "react-redux";
import '../App.css'; 
import { useNavigate } from 'react-router-dom';

const CommentIcon = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const navigate = useNavigate();
  return(
  <button className={`comment-icon ${darkMode ? 'dark' : 'light'}`} onClick={()=>(navigate("/Connect"))}>
    <FaEnvelope size={30} />
  </button>
  );
};

export default CommentIcon;