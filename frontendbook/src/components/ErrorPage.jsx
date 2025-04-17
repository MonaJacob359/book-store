import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-8 bg-teal-100'>
      <h2 className='text-5xl font-bold text-center mb-4 text-red-700/80'>Error</h2>
      <p className='text-base '>Sorry, something wrong. or this  link not currect url Please try again later.</p>
      <button onClick={()=> navigate('/')}
        className='text-white rounded-full py-1.5 px-3 bg-teal-900/90 hover:bg-teal-900/70'> Go back home</button>
    </div>
  );
};

export default ErrorPage;