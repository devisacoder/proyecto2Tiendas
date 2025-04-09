import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider =({ children }) => {
      const [ cart, setCart ] = useState([]) 
        
        useEffect(() => {
            const storedCart = localStorage.getItem("cart")
    
            if(storedCart) {
                setCart(JSON.parse(storedCart))
            }
        }, [])
    
        useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cart))
        }, [cart])

        
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id)

            if(existingProduct) {
                return prevCart.map(item => 
                    item.id === product.id 
                    ? {...item, quantity: item.quantity + 1} 
                    : item
                ) 
            } else{
                return [...prevCart, {...product, quantity: 1}]
            }
        })
    }


    const incrementQuantity = ( id ) => {
        setCart((prevCart) => 
            prevCart.map((item) => 
                item.id === id ? { ...item, quantity: item.quantity + 1} : item
            )
        )
    }


    const decrementQuantity = ( id ) => {
        setCart((prevCart) => 
            prevCart.map((item) => 
                item.id === id ? {...item, quantity: item.quantity - 1} : item
            )
            .filter((item) => item.quantity > 0)
        )
    }

    const cartTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            incrementQuantity,
            decrementQuantity,
            cartTotalQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}