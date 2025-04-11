import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext()

export const CartProvider =({ children }) => {
      const [ cart, setCart ] = useState([]) 
      const { tenant } = useContext(AuthContext)
        
        useEffect(() => {

            if(!tenant) return

            const storedCart = localStorage.getItem(`cart_${tenant}`)
    
            if(storedCart) {
                setCart(JSON.parse(storedCart))
            } else {
                setCart([])
            }
        }, [tenant])
    
        useEffect(() => {
            if (!tenant) return
            localStorage.setItem(`cart_${tenant}`, JSON.stringify(cart))
        }, [cart, tenant])

        
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id)

            if(existingProduct) {
                return prevCart.map((item) => 
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

    const clearCart = () => {
        setCart([])
    }

    const cartTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
    
    const totalQuantity = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            incrementQuantity,
            decrementQuantity,
            cartTotalQuantity,
            clearCart,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}