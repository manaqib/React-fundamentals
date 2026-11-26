import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';


export default function ProductAPI() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { addToCart, handleRemove, total } = useContext(CartContext);

    // console.log("Total Price", total)
    useEffect(() => {

        async function getProducts() {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, [])

    const handleDetail = (id) => {
        navigate(`/product-detail/${id}`)
        // console.log("product detail id", id)
    }

    return (
        <div className="w-full max-w-[1360px] mx-auto mt-20">
            <h2>Product Listing</h2>

            {loading && (
                <p className="w-full max-w-[1360px] mx-auto mt-20 text-center text-lg font-medium text-gray-900 dark:text-white" >Loading products...</p>
            )}

            {error && (
                <p className="w-full max-w-[1360px] mx-auto mt-20 text-center text-lg font-medium text-red-600 dark:text-red-500">Error: {error}</p>
            )}

            {!loading && !error && (
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:px-4">
                    {products.map((product) => (
                        <div key={product.id} className='border p-4 rounded-lg shadow-md w-full'>
                            <p className="text-sm text-gray-500 font-bold capitalize">
                                Category: {product.category}
                            </p>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-45 h-45 object-contain mx-auto"
                            />
                            <div className='text-base font-bold mb-2'>{product.title}</div>

                            <div className='text-sm text-gray-600 flex flex-row gap-1 items-center justify-between' >
                                <p className="font-semibold text-xs">${product.price.toFixed(2)}</p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDetail(product.id)}
                                >
                                    Detail
                                </button>
                                
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => addToCart(product)}
                                >
                                    Add
                                </button>
                               
                                <p className="font-semibold text-xs">Rating: {product.rating}</p>
                            </div>

                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}
