import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-8 bg-red-200'>
      <h2 className='text-5xl font-bold text-center mb-4 text-red-700/80'>Error</h2>
      <p className='text-base text-blue-500'>Sorry, something wrong. or this  link not currect url Please try again later.</p>
      <button onClick={()=> navigate('/')}
        className='text-white rounded-full py-1.5 px-3 bg-gray-900/80 hover:bg-gray-900/70'> go back home</button>
    </div>
  );
};

export default ErrorPage;