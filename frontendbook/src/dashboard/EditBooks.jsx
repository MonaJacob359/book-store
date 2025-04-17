

// import { useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import { Button, Label, Textarea, TextInput } from "flowbite-react";

// const EditBooks = () => {
//   const { id } = useParams();
//   const { bookTitle, authorName, URL, category, bookDescription, bookPDFURL } = useLoaderData();

//   const backendUrl = import.meta.env.VITE_BACKEND_URL


//   const bookCategories = [
//     "Fiction", "Non-Fiction", "Mistery", "Programming", "Science Fiction",
//     "Fantasy", "Horror", "Bibliography", "Autobiography", "History",
//     "Self-Help", "Memoir", "Business", "Children Books", "Travel",
//     "Religion", "Art and design"
//   ];

//   const [selectedBookCategory, setSelectedBookCategory] = useState(category || bookCategories[0]);

//   const handleChangeSelectedValue = (event) => {
//     console.log(event.target.value);
//     setSelectedBookCategory(event.target.value);
//   };

//   // Handle book submission
//   const handleUpdate = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     const bookTitle = form.bookTitle.value;
//     const authorName = form.authorName.value;
//     const URL = form.URL.value;
//     const category = form.categoryName.value;
//     const bookDescription = form.bookDescription.value;
//     const bookPDFURL = form.bookPDFURL.value;

//     const updateBookObj = { bookTitle, authorName, URL, category, bookDescription, bookPDFURL };

//     // Update the book data
//     fetch(`${backendUrl}/book/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updateBookObj)
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => {
//         alert("Book is updated successfully!!!");
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   };

//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Update the Book Data</h2>

//       <form onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
//         {/* First row */}
//         <div className='flex gap-8'>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="bookTitle" value="Book Title" />
//             </div>
//             <TextInput id="bookTitle" name='bookTitle' type="text"
//               defaultValue={bookTitle} placeholder="Book name" required shadow />
//           </div>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="authorName" value="Author Name" />
//             </div>
//             <TextInput id="authorName" name='authorName' type="text"
//               defaultValue={authorName} placeholder="Author Name" required shadow />
//           </div>
//         </div>

//         {/* Second row */}
//         <div className='flex gap-8'>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="URL" value="Book Image URL" />
//             </div>
//             <TextInput id="URL" name='URL' type="text"
//               placeholder="Book image URL" defaultValue={URL} required shadow />
//           </div>

//           {/* Category */}
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="inputState" value="Book Category" />
//             </div>
//             <select id='inputState' name='categoryName' className='w-full rounded'
//               value={selectedBookCategory} onChange={handleChangeSelectedValue}>
//               {
//                 bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
//               }
//             </select>
//           </div>
//         </div>

//         {/* Book Description */}
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="bookDescription" value="Book Description" />
//           </div>
//           <Textarea id="bookDescription" name='bookDescription'
//             placeholder="Write your book description.." required defaultValue={bookDescription}
//             className='w-full' rows={6} />
//         </div>

//         {/* Book PDF Link */}
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="bookPDFURL" value="Book PDF URL" />
//           </div>
//           <TextInput id="bookPDFURL" name='bookPDFURL' type="text"
//             placeholder="Book PDF URL" defaultValue={bookPDFURL} required shadow />
//         </div>

//         <Button type="submit" className='mt-5'>
//           Update Book
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default EditBooks;






import { useState } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EditBooks = () => {
  const { id } = useParams();
  const  navigate = useNavigate();

  const { bookTitle, authorName, URL, category, bookDescription, bookPDFURL } = useLoaderData();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const bookCategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction",
    "Fantasy", "Horror", "Bibliography", "Autobiography", "History",
    "Self-Help", "Memoir", "Business", "Children Books", "Travel",
    "Religion", "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category || bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const URL = form.URL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = { bookTitle, authorName, URL, category, bookDescription, bookPDFURL };

    fetch(`${backendUrl}/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(() => {
        toast.success("Book updated successfully!");
        setTimeout(() => navigate('/admin/dashboard/manage'), 3000);
      })
      .catch((error) => {
        toast.error("Failed to update book. Please try again.");
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="bookTitle" value="Book Title" />
            <TextInput id="bookTitle" name="bookTitle" type="text" defaultValue={bookTitle} required shadow />
          </div>
          <div className="lg:w-1/2">
            <Label htmlFor="authorName" value="Author Name" />
            <TextInput id="authorName" name="authorName" type="text" defaultValue={authorName} required shadow />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="URL" value="Book Image URL" />
            <TextInput id="URL" name="URL" type="text" defaultValue={URL} required shadow />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="inputState" value="Book Category" />
            <select id="inputState" name="categoryName" className="w-full rounded"
              value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="bookDescription" value="Book Description" />
          <Textarea id="bookDescription" name="bookDescription"
            defaultValue={bookDescription} className="w-full" rows={6} required />
        </div>

        <div>
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text"
            defaultValue={bookPDFURL} required shadow />
        </div>

        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default EditBooks;


