import React, {useEffect, useState} from 'react'
import { Link } from 'react-router';



const ProductList = () => {

  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/")
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
      <ul className="grid grid-cols-4 gap-4 items-center justify-center">
        {products.map((product) => (
          <li className='h-[300px] w-[230px] text-center p-2 flex flex-col items-center justify-center' key={product.id}>
            <img className='w-[170px]' src={product.image} alt={product.title} />
            <span>{product.title.substring(0,12)}</span> - ${product.price.toFixed(2)}
            <Link to={`/productList/${product.id}`} className=''>Buy Now</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList