import React from 'react';
import { useNavigate } from 'react-router-dom';

const Comment = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Chuyển hướng đến trang login khi click vào nút "Login"
    navigate('/login');
  };

  return (
    <div className='flex justify-center md:justify-end'>
      <button className='btn  mr-2' onClick={handleLoginClick}>Login</button>
      <button className='btn '>Register</button>
    </div>
  );
};

export default Comment;
