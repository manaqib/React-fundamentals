import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ProductDetail() {

    const { addToCart } = useContext(CartContext)

    const { id } = useParams();

    const [isProductDetail, setIsProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const checkStock = (stock) => {
        if (stock === 0) {
            return "Out of Stock"
        } else if (stock >= 1 && stock <= 5) {
            return "Low Stock"
        } else {
            return "In stock"
        }
    }

    console.log(" stock value", checkStock(3))

    useEffect(() => {
        async function getProductByID(id) {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                if (!response.ok) {
                    throw new Error("Failed to load data.")
                }
                const data = await (response.json())
                setIsProductDetail(data)

                // console.log("product Detail", isProductDetail)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getProductByID(id);
    }, [id])

    const getStockColor = (stock) => {
        if(stock === 0) return "text-black";
        if(stock <=5) return "text-red-700";
        return "text-green-500"
    }

    useEffect(() => {
        // console.log("Updated Product Detail:", isProductDetail);
    }, [isProductDetail]);

    return (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <h2>Product Detail</h2>
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                {isProductDetail && (<div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">

                        <img
                            className="w-full dark:hidden"
                            src={isProductDetail.images[0]}
                            alt="{isProductDetail.title}"
                        />
                    </div>
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            {isProductDetail.title}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                ${isProductDetail.price}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <p className="flex items-center text-sm font-bold gap-1">Rating: </p>
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                ({isProductDetail.rating})
                            </p>
                            <a
                                href="#"
                                className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                            >
                                {isProductDetail.reviews.length} Reviews
                            </a>
                        </div>

                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <p className="flex items-center text-sm font-bold gap-1">Brand: </p>
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                {isProductDetail.brand ? isProductDetail.brand : "N/A"}
                            </p>
                        </div>
                        <div className="flex items-center text-sm font-medium leading-none text-gray-500 dark:text-gray-40 gap-1">
                            <p className="flex items-center text-sm font-bold "> Category: </p>
                            {isProductDetail.category}
                        </div>

                        <div className={`text-sm font-bold  ${getStockColor(isProductDetail.stock)} `} >
                            {checkStock(isProductDetail.stock)}
                        </div>

                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <p className="flex items-center text-sm font-bold gap-1">Return Policy: </p>
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                {isProductDetail.returnPolicy}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <p className="flex items-center text-sm font-bold gap-1">Shipping Information: </p>
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                {isProductDetail.shippingInformation}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <p className="flex items-center text-sm font-bold gap-1">Stock: </p>
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                {isProductDetail.stock} left
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <p className="flex items-center text-sm font-bold gap-1">Warranty Information: </p>
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                {isProductDetail.warrantyInformation}
                            </p>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">

                            <button onClick={() => addToCart(isProductDetail)} className='bg-blue-400 p-2 rounded text-sm font-bold text-white px-5'>
                                Add to Cart
                            </button>
                        </div>
                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                        <p className="mb-6 text-gray-500 dark:text-gray-400">
                            {isProductDetail.description
                            }
                        </p>

                    </div>
                </div>)}
            </div>
        </section>

    )
}
