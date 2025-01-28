import { createContext, useState, useContext, useEffect } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cartItems, setCartItems] = useState(loadCartFromStorage);

  // update localStorage whenever cartItems changes
  const updateLocalStorage = (newCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  // Calculating cartCount whenever cartItems changes

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (cartTotal, cartItem) => cartTotal + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (cartTotal, cartItem) => cartTotal + cartItem.price * cartItem.quantity,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      let updatedItems;

      if (existingItem) {
        updatedItems = prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: item.quantity || i.quantity + 1 }
            : i
        );
      } else {
        updatedItems = [
          ...prevItems,
          { ...item, quantity: item.quantity || 1 },
        ];
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

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    calculateTotal,
    cartCount,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCart = () => useContext(cartContext);
