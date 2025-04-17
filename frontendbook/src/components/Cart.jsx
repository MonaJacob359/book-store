
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

const initialCart = [
  { _id: 1, title: "Book One", price: 10, quantity: 1 },
  { _id: 2, title: "Book Two", price: 15, quantity: 1 },
];

const DELIVERY_FEE = 5;

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleRemove = (id) => {
    setCart(cart.filter((book) => book._id !== id));
    toast.success("Book removed from cart");
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCart(
      cart.map((book) => (book._id === id ? { ...book, quantity } : book))
    );
  };

  const handleClearCart = () => {
    setCart([]);
    toast.info("Cart cleared");
  };

  const totalBookPrice = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
  const totalPrice = cart.length > 0 ? totalBookPrice + DELIVERY_FEE : 0;

  return (
    <div className="container mx-auto p-4 mt-16 w-[85%] text-gray-800/55">
      <h2 className="text-2xl font-bold mb-4 text-gray-800/80">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/shop" className="text-blue-500">Continue shopping</Link>.
        </p>
      ) : (
        <div>
          {cart.map((book) => (
            <div key={book._id} className="flex justify-between items-center border-b p-2">
              <div>
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-600">Price: ${book.price}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => handleQuantityChange(book._id, book.quantity - 1)} className="px-2 bg-gray-300">-</button>
                  <span className="px-4">{book.quantity}</span>
                  <button onClick={() => handleQuantityChange(book._id, book.quantity + 1)} className="px-2 bg-gray-300">+</button>
                </div>
              </div>
              <button onClick={() => handleRemove(book._id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-semibold">Total Book Price: ${totalBookPrice}</p>
            <p className="text-lg font-semibold">Delivery Fee: ${cart.length > 0 ? DELIVERY_FEE : 0}</p>
            <p className="text-xl font-bold">Total Price: ${totalPrice}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={handleClearCart} className="text-red-600">Clear Cart</button>
            <Link to="#" className="bg-blue-500 text-white px-4 py-2">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
