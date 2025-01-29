import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Cart = () => {
  const { cartItems, removeFromCart, calculateTotal, addToCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      addToCart({ id, quantity: newQuantity });
    }
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="p-5" style={{ backgroundColor: "#F4F4F4" }}>
      <h1 className="text-3xl font-bold mb-5 text-center">Your Cart</h1>
      {loading ? (
        <div className="flex flex-col items-center p-5 rounded-lg sm:shadow-md">
          <Skeleton height={40} width={300} />
          <ul className="w-full mt-5">
            {[1, 2, 3].map((_, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5 p-4 rounded-lg"
                style={{
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-4 flex-1">
                  <Skeleton height={80} width={80} />
                  <Skeleton height={20} width={150} />
                </div>
                <Skeleton height={20} width={50} />
                <Skeleton height={40} width={50} />
                <Skeleton height={20} width={100} />
                <Skeleton height={40} width={80} />
              </li>
            ))}
          </ul>
          <Skeleton height={40} width={200} style={{ marginTop: '20px' }} />
        </div>
      ) : cartItems.length === 0 ? (
        <h2 className="text-center text-xl font-medium">Cart is empty</h2>
      ) : (
        <div className="flex flex-col items-center p-5 rounded-lg sm:shadow-md">
          <ul className="w-full">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5 p-4 rounded-lg"
                style={{
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Product Image and Title */}
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 md:w-16 md:h-16 object-contain"
                  />
                  <span
                    className="text-lg font-semibold md:text-base"
                    style={{
                      maxWidth: '200px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    title={item.title}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Product Price */}
                <div className="flex-1 text-lg font-medium md:text-base">
                  {`$${item.price.toFixed(2)}`}
                </div>

                {/* quantity Input */}
                <div className="flex-1">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value) || 0)
                    }
                    className="w-16 border text-center text-lg font-medium md:w-20"
                  />
                </div>

                {/* subtotal */}
                <div className="flex-1 text-lg font-medium md:text-base">
                  {`Subtotal: $${(item.price * item.quantity).toFixed(2)}`}
                </div>

                {/* remove Button */}
                <div className="flex-1">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-lg font-medium md:text-base"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* total Price */}
          <h2 className="text-2xl font-bold mt-5">
            {`Total: $${calculateTotal().toFixed(2)}`}
          </h2>
          <button
            onClick={handleProceedToCheckout}
            className="cursor-pointer px-5 py-3 bg-green-500 text-white rounded mt-5 hover:bg-green-600 text-lg font-semibold"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;