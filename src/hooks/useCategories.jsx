import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { CategoryContext } from "../context/Categories"
import { ProductsToBuyContext } from "../context/ProductsToBuyContext"
import { useMyProducts } from "./useMyProducts"

export const useCategories = () => {
    const location = useLocation()
    const { setCategory } = useContext(CategoryContext)
    const { products: productsToBuy } = useContext(ProductsToBuyContext)
    const { myProducts } = useMyProducts()


    let products = [];
    if(location.pathname === "/products-to-buy-page") {
        products = productsToBuy
    } else if(location.pathname === '/my-products') {
        products = myProducts
    }


    const allCategories = products.flatMap(p => p.category)
    const uniqueCategories = Array.from(
        new Set(allCategories.map(cat => cat.trim()))
    );


    const handleClick = (category) => {
        if(location.pathname === "/products-to-buy-page") {
            setCategory("productsToBuy", category);
        } else if (location.pathname === "/my-products") {
            setCategory("myProducts", category);
        }
    }


    return { uniqueCategories, handleClick }
}