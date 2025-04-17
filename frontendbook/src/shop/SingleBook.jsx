
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";



const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1706934613i/206119058.jpg",
  description: `The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts the life of Jay Gatsby, a mysterious millionaire who is obsessed with a lost love, Daisy Buchanan. The novel explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age or the Roaring Twenties in the United States. The novel is often regarded as one of the greatest works of American literature.`,
  price: "$14.99",
  genre: "Fiction",
  publicationDate: "1925",
};



const SingleBook = () => {
  const {_id, bookTitle, URL,bookDescription,authorName,category} = useLoaderData();
  const [isHeart, setIsHeart] = useState(
    () => {
      const storedisHeart = localStorage.getItem("isHeart");
      return storedisHeart === "true" ? (storedisHeart) : false;
    }
  )
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? Number(storedCount) : 0;
  });
  const [addToCart, setAddToCart] = useState([_id,isHeart,count])
  

// ADD LIKE TO THE BOOK
  const handleHeart = () => {
    
    setIsHeart((prev) => !prev);

  };

  // ADD TO CART
  const handleAddToCart = () => {
    if(_id === _id){
    setCount((prevCount) => prevCount + 1);
    alert('book added to cart')
  }else{
    alert('you allready added this book')
  }
  };


  // SETITEM IN LOCALSTORAGE
  useEffect(()=>{
  localStorage.setItem("isHeart",isHeart);
  localStorage.setItem("addToCart",addToCart);
  localStorage.setItem("count",count);
  },[isHeart,addToCart,count])

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between ">
        <div className="flex flex-col lg:flex-row gap-12 md:w-[80%] mx-auto mt-16 md:h-[50%]">
          {/* Book Image */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={URL}
              alt={book.title}
            />
          </div>

          {/* Book Details */}
          <div className="flex-1 space-y-2">
             <div className=''>
             <h1 className="text-4xl font-bold text-gray-800">{bookTitle}</h1>
            <p className="text-xl text-gray-800/70 font-semibold mt-2 "><span className='text-gray-800/75 font-bold'>Author:</span> {authorName}</p>
            <p className="text-lg text-gray-500 mt-4">{bookDescription}</p>

            {/* Book Metadata */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">Genre:</p>
                <p className="text-gray-600">{category}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">Price: </p>
                <p className="text-gray-600">{'$10'}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">Publication Date:</p>
                <p className="text-gray-600">{book.publicationDate}</p>
              </div>
            </div>
             </div>

            {/* Add to Cart / Buy Now Button */}
            <div className="mt-4 flex items-center gap-x-4">
              <button onClick={handleAddToCart} className="flex items-center gap-x-2  py-2 px-4 text-sm bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Add to Cart<MdAddShoppingCart size={25}/>
              </button>
              <span onClick={handleHeart} className="flex bg-gray-200 py-1.5 px-3 rounded-lg">
                {isHeart ? (
                  <IoMdHeart className="text-3xl text-red-700" />
                ) : (
                  <IoMdHeartEmpty className="text-3xl text-red-700" />
                )}
                <span className='text-gray-900/55 text-sm ml-1 mt-2'>300,k</span>
              </span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
