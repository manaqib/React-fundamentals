import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'


export default function ShopingCart(product) {

  const { cart, decreaseQuantity, increaseQuantity, handleRemove, total, discountCalculation } = useContext(CartContext)

  useEffect(() => {
    // setIsAddToCart(cart)
  }, [cart, handleRemove])

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        Shopping Cart
      </h2>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

        {cart.map((item) => {
          return <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8" key={item.product.id}>
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">

                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" className="shrink-0 md:order-1">
                      <img
                        className="h-20 w-20 dark:hidden"
                        src={item.product.thumbnail}
                        alt="imac image"
                      />

                    </a>
                    <label htmlFor="counter-input" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.product)}
                          id="decrement-button-2"
                          data-input-counter-decrement="counter-input-2"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                            />
                          </svg>
                        </button>

                        <div className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">{item.quantity}</div>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.product)}
                          id="increment-button-2"
                          data-input-counter-increment="counter-input-2"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-between text-end md:order-4 md:w-52 gap-2 ml-20">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          ${item.product.price}
                        </p>
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                      >
                        {item.product.title}
                      </a>
                      <div className="flex items-center gap-4">

                        <button
                          type="button" onClick={() => handleRemove(item.product)}
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                          <svg
                            className="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18 17.94 6M18 18 6.06 6"
                            />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}

        {cart && <div className="mx-auto mt-10 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full ">
        
          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Order summary
            </p>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-base font-bold text-gray-900">
                    Original price
                  </div>
                  <dd className="text-base font-medium text-gray-500">
                    ${total.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-base font-bold text-gray-900 ">
                    Discount
                  </div>
                  <dd className="text-base font-medium text-gray-900">
                    ${discountCalculation.toFixed(2)}
                  </dd>
                </div>

              </div>
              <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <div className="text-base font-bold text-gray-900 dark:text-white">
                  Total
                </div>
                <dd className="text-base font-bold text-gray-900 dark:text-white">
                 {!total == 0 && !discountCalculation == 0 && <span className='text-red-500 line-through'> ${total.toFixed(2)}</span>} ${(total-discountCalculation).toFixed(2)}
                </dd>
              </div>
            </div>
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>}
      </div>
    </section>

  )
}
