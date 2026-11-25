import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const total = cart.reduce((subtotal, item) => {
        return subtotal + (item.product.price * item.quantity)
    }, 0)

    const discountCalculation = cart.reduce((discount, item) => {
    const productDiscount =
        (item.product.price * item.product.discountPercentage) / 100;

    return discount + (productDiscount * item.quantity);

}, 0);
  console.log("discount Calculation",discountCalculation)

    const addToCart = (product) => {
        const existingProduct = cart.find(
            (item) => item.product.id === product.id
        );
        existingProduct
            ? setCart((prevCart) =>
                prevCart.map((item) =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            ) : setCart(prevCart => [...prevCart, { product, quantity: 1 }]);
    }


    const decreaseQuantity = (product) => {
        const manageQuantity = cart.find(
            (item) => item.product.id === product.id && item.quantity > 1
        );
        manageQuantity ? setCart((prevCart) =>
            prevCart.map((item) =>
                item.product.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        ) : alert("Product not found")
    }


    const increaseQuantity = (product) => {
        const manageQuantity = cart.find(
            (item) => item.product.id === product.id && item.quantity >= 1
        );
        manageQuantity ? setCart((prevCart) =>
            prevCart.map((item) =>
                item.product.id === product.id && item.quantity >= 1 ? { ...item, quantity: item.quantity + 1 } : item
            )
        ) : alert("Product not found")
    }


    const handleRemove = (product) => {
        // debugger;
        const existingProduct = cart.find(
            (item) => item.product.id === product.id
        );
        existingProduct ? setCart((prevCart) =>
            prevCart.filter((item) => item.product.id !== product.id)
        ) : alert("Product was not found");
        // console.log("Removed product:", product);
    }


    useEffect(() => {
        // console.log("Cart updated:", cart);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, handleRemove, decreaseQuantity, increaseQuantity, total, discountCalculation }}>
            {children}
        </CartContext.Provider>
    )
}







