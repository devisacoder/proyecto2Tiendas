import { createContext, useEffect, useState } from "react"
import { getProducts } from "../service/products"
import { useContext } from "react"
import { CategoryContext } from "./Categories"

export const ProductsToBuyContext = createContext()

export const ProductsToBuyProvider = ({ children }) => {
    const [ products, setProducts ] = useState([])
    const { selectedCategory } = useContext(CategoryContext)

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

    const filteredProducts = selectedCategory.productsToBuy 
        ?  products.filter(product => 
                product.category.some(
                    cat => cat.trim() === selectedCategory.productsToBuy
                )
            ) 
        : products;


    return(
        <ProductsToBuyContext.Provider value={{
            products,
            formatearPrecio,
            filteredProducts
        }}>
            {children}
        </ProductsToBuyContext.Provider>
    )
}