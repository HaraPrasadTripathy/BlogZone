import React, { useState } from 'react'

function Logo({ width = '100px' }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <div
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        transform: isClicked ? 'scale(0.95)' : 'scale(1)',
        opacity: isClicked ? 0.6 : 1,
        transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out'
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img
        src="blogImage-removebg-preview.png"
        alt="logo"
        style={{
          height: "3.5rem",
          width: "6.1rem",
          transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
        }}
      />
    </div>
  )
}

export default Logo
