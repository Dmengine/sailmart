import React from 'react';
import { useCart } from '../../context/cartContext';

const Cart = () => {
  const { cartItems, removeFromCart, calculateTotal, addToCart } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      // Update the quantity and sync with localStorage
      addToCart({ id, quantity: newQuantity });
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <h2 className="text-center text-lg">Cart is empty</h2>
      ) : (
        <div className="flex flex-col items-center p-5 rounded-lg ">
          <ul className="w-full">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5  p-4 rounded-lg"
                style={{
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <span
                    className="text-sm md:text-base"
                    style={{
                      maxWidth: '150px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    title={item.title} //show full title on hover
                  >
                    {item.title}
                  </span>
                </div>
                <div className="flex-1 text-sm md:text-base">
                  ${item.price.toFixed(2)}
                </div>
                <div className="flex-1">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border text-center"
                  />
                </div>
                <div className="flex-1 text-sm md:text-base">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="flex-1">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mt-5">
            Total: ${calculateTotal().toFixed(2)}
          </h2>
          <button className="px-5 py-3 bg-green-500 text-white rounded mt-5 hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
