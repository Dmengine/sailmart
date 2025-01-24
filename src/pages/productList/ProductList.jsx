import React, {useEffect, useState} from 'react'
import { useCart } from '../../context/cartContext'


const ProductList = () => {

  const { addToCart } = useCart();
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        console.log(data)
        setProduct(data)
      }catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [])

  if (loading){
    return <p>Loading products...</p>
  }

  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} style={{ width: 50 }} />
            <span>{product.title}</span> - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)} className='m-3'>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList