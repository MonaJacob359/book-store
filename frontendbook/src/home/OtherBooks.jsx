import { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const OtherBooks = () => {  
    const [books, setBooks] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL


    useEffect(() => {
      fetch(`${backendUrl}/all-books`)
          .then(res => res.json())
          .then(data => {
              // Shuffle the data randomly
              const shuffledData = data.sort(() => 0.5 - Math.random());
              // Take the first 8 items
              setBooks(shuffledData.slice(0, 8));
          })
          .catch(error => console.error("Error fetching books:", error));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks



