import { createContext, useEffect, useState } from "react"
import { getProducts } from "../service/products"
import { useContext } from "react"
import { CategoryContext } from "./Categories"

export const ProductsToBuyContext = createContext()

export const ProductsToBuyProvider = ({ children }) => {
    const[ search, setSearch ] = useState("")
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

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory?.productsToBuy
            ? product.category.some(
                cat => cat.trim().toLowerCase() === selectedCategory.productsToBuy.toLowerCase()
            )
            : true;
    
        const matchesSearch = product.name?.toLowerCase().includes(search?.toLowerCase());
    
        return matchesCategory && matchesSearch;
    });

    return(
        <ProductsToBuyContext.Provider value={{
            products,
            formatearPrecio,
            filteredProducts,
            setSearch,
            search
        }}>
            {children}
        </ProductsToBuyContext.Provider>
    )
}