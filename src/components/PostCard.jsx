import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = appwriteService.getFilePreview(featuredImage);

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <img
          src={imageUrl}
          alt={title}
          className='w-full h-48 object-cover object-center'
        />
        <div className='p-4'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
