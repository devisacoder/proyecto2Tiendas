import { createContext, useEffect, useState } from "react"
import { getProducts } from "../service/products"

export const ProductContext = createContext()

export const ProviderContext = ({ children }) => {
    const [ products, setProducts ] = useState([])
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


    useEffect(() => {
        fetchProducts()
    },[])
    
    const fetchProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }


    const formatearPrecio = (precio) => {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
        }).format(precio);
    }


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

    return(
        <ProductContext.Provider value={{
            products,
            formatearPrecio,
            cart,
            addToCart,
            incrementQuantity,
            decrementQuantity,
            cartTotalQuantity
        }}>
            {children}
        </ProductContext.Provider>
    )
}