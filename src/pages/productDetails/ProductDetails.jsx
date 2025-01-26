import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/cartContext';
import { useParams } from 'react-router';
import star_icon from '/src/assets/star_icon.png';
import star_dull_icon from '/src/assets/star_dull_icon.png';
import RelatedProducts from '../RelatedProducts';
import { Link } from 'react-router';


const ProductDetails = () => {

  const { addToCart } = useCart();
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`)
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

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true)
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     setProduct(await response.json());
  //     setLoading(false)
  //   }
  //   fetchProducts();
  // }, []);

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className='flex space-x-4 mb-4'>
                <div className='flex flex-col space-y-4'>
                <img
                  className="w-[150px] h-[125px]"
                  src={product.image}
                  alt={product.title}
                />
                <img
                  className="w-[150px] h-[125px]"
                  src={product.image}
                  alt={product.title}
                />
                <img
                  className="w-[150px] h-[125px]"
                  src={product.image}
                  alt={product.title}
                />
                <img
                  className="w-[150px] h-[125px]"
                  src={product.image}
                  alt={product.title}
                />
                </div>
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-[550px] h-[550px]"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              </div>
              
              <div className="flex -mx-2 mb-4 items-center">
                <div className="w-1/2 px-2">
                  <button onClick={() => addToCart(product)} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <a href="/cart"><button className="w-[200px] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Go to Cart
                  </button></a>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.title}
              </h2>
              <div className="flex gap-2 items-center">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
         </div>
              {/* <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p> */}
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    ${product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Size:
                </span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    S
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    M
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    L
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XL
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className='font-bold m-8 mt-16 text-lg'>Related Items</h1>
        {/* <RelatedProducts /> */}
      </div>
    </div>
  )
}

export default ProductDetails