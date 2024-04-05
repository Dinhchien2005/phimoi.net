//file này là để sao nó sắp xếp theo đúng trình tự chứ không phải là hiển thị ra đâu nha
//dùng props là movie ở bên index nhé 
//mình thấy nó giống cái bài mà const{title,posts}=props đấy
//cách viết khá là giống html
import React from 'react';
import { BiTime } from 'react-icons/bi';
const MovieCard = ({ movie }) => {
  const { src, title, main, runtime } = movie;

  return (
    <div className='card'>
      <img src={src} className='w-full' alt={title} />
      <div className='p-4 text-white'>
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className='badge'>
        <BiTime />
        <p>{runtime}</p>
      </div>
    </div>
  );
};



export default MovieCard;