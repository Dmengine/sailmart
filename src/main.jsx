import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/cartContext';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./context/authContext";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <CartProvider>
    <StrictMode>
    <App />
    </StrictMode>,
  </CartProvider>
  </AuthProvider>
)
