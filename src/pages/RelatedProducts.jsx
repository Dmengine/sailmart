import React from 'react'
import { useState, useEffect, Link } from 'react';

const RelatedProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
          const fetchProducts = async () => {
            try {
              const response = await fetch('https://fakestoreapi.com/products?limit=5')
              const data = await response.json();
              console.log(data)
              setProducts(data)
            }catch (error) {
              console.error(error)
            }
          };
          fetchProducts();
        }, [])
  return (
    <div>
      <ul className="grid grid-cols-4 gap-4 items-center justify-center">
        {products.map((product) => (
          <li className='h-[300px] w-[230px] text-center p-2 flex flex-col items-center' key={product.id}>
            <img className='w-[170px]' src={product.image} alt={product.title} />
            <span>{product.title.substring(0,12)}</span> - ${product.price.toFixed(2)}
            <Link to={`/productList/${product.id}`} className=''>Buy Now</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedProducts
