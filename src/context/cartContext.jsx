import { createContext, useState, useContext} from "react";


const cartContext = createContext();

export const CartProvider = ({ children }) => {


  const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  };


  const [cartItems, setCartItems] = useState(loadCartFromStorage);

  // update localStorage whenever cartItems changes
  const updateLocalStorage = (newCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      let updatedItems;

      if (existingItem) {
        // If item already in cart, update quantity
        updatedItems = prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If item not in cart, add with initial quantity
        updatedItems = [...prevItems, { ...item, quantity: 1 }];
      }

      updateLocalStorage(updatedItems);

      return updatedItems;
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);

      updateLocalStorage(updatedItems);

      return updatedItems;
    });
  };

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = { cartItems, addToCart, removeFromCart, calculateTotal };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCart = () => useContext(cartContext);
