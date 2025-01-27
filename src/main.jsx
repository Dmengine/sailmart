import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/cartContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <StrictMode>
    <App />
    </StrictMode>,
  </CartProvider>
  
)
