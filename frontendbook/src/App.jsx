import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <div className='min-h-screen'>
      <Outlet />
      </div>
        <MyFooter/>
      </Suspense>
    </>
  );
}

export default App;
