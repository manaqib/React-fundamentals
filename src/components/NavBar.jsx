
import { useState } from "react";
import { Link } from 'react-router'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



export default function NavBar() {
    const { cart } = useContext(CartContext);

     const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);



    return (
        <div>
            <>
                  <nav className="bg-white dark:bg-gray-800 antialiased ">
            <div className="max-w-screen-xl mx-auto 2xl:px-0 py-4">

                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="shrink-0">
                        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
                            My Store
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-8">
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/task-manager" className="nav-link">
                                Task Manager
                            </Link>
                        </li>

                        <li>
                            <Link to="/register" className="nav-link">
                                Register
                            </Link>
                        </li>

                        <li>
                            <Link to="/shoping-cart" className="nav-link">
                                View Cart
                            </Link>
                        </li>
                    </ul>

                    {/* Cart + Mobile Menu Button */}
                    <div className="flex items-center gap-2">

                        <Link
                            to="/shoping-cart"
                            className="inline-flex items-center gap-2 p-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 4h1.5L9 16h8l3-9H7.312M9 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                                />
                            </svg>

                            <span className="hidden sm:inline text-sm font-medium">
                                My Cart ({cart.length})
                            </span>

                            <span className="sm:hidden text-sm font-medium">
                                ({cart.length})
                            </span>
                        </Link>

                        {/* Hamburger Button */}
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <ul className="lg:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">

                        <li>
                            <Link onClick={closeMenu} to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link onClick={closeMenu} to="/task-manager" className="nav-link">
                                Task Manager
                            </Link>
                        </li>

                        <li>
                            <Link onClick={closeMenu} to="/register" className="nav-link">
                                Register
                            </Link>
                        </li>

                        <li>
                            <Link onClick={closeMenu} to="/shoping-cart" className="nav-link">
                                View Cart
                            </Link>
                        </li>

                    </ul>
                )}

            </div>
        </nav>

            </>

        </div>
    )
}
