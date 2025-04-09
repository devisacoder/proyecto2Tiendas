import { createContext, useEffect, useState } from "react"
import { getProducts } from "../service/products"

export const ProductContext = createContext()

export const ProviderContext = ({ children }) => {
    const [ products, setProducts ] = useState([])
  

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

    return(
        <ProductContext.Provider value={{
            products,
            formatearPrecio,
        }}>
            {children}
        </ProductContext.Provider>
    )
}