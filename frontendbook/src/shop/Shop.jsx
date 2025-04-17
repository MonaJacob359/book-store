


import { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL


  useEffect(() => {
    fetch(`${backendUrl}/all-books`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Expected JSON, but got " + contentType);
        }
        return res.json();
      })
      .then(data => setBooks(data))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All books are here</h2>

      {/* cards */}
      <div className='grid gap-8 my-12 lg:grid-cols-4  sm:grid-cols-3 grid-cols-1'>
        {
          books.map(book => 
            <Card key={book._id} className="max-w-sm ">
              <img src={book.URL} alt={book.bookTitle} className='h-60 rounded-lg'/>
              <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal overflow-hidden w-full line-clamp-3  text-gray-700 dark:text-gray-400">
                {book.bookDescription}
              </p>
              <Link to={`/book/${book._id}`} >
              <button className='bg-blue-700 font-semibold w-full text-white py-2 rounded'>Buy New</button>
              </Link>
            </Card>
            
          )
        }
      </div>
    </div>
  );
}

export default Shop;