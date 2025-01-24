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
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <h2>Cart is empty</h2>
      ) : (
        <div className="flex items-center flex-col p-5">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-5 m-5 border p-4 rounded-lg"
                style={{
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-3" style={{ flex: 2 }}>
                  <img src={item.image} alt={item.title} style={{ width: 50 }} />
                  <span
                    style={{
                      maxWidth: '150px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    title={item.title}
                  >
                    {item.title}
                  </span>
                </div>
                <div style={{ flex: 1 }}>${item.price.toFixed(2)}</div>
                <div style={{ flex: 1 }}>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    style={{
                      width: 60,
                      border: '1px solid #000',
                      paddingLeft: '10px',
                      margin: '10px',
                      textAlign: 'center',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div style={{ flex: 1 }}>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="m-3 px-3 py-2 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${calculateTotal().toFixed(2)}</h2>
          <button className="px-5 py-3 bg-green-500 text-white rounded mt-5">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
