import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useEffect } from "react"
import { useState } from "react"
import { CategoryContext } from "../context/Categories"

export const useMyProducts = () => {
    const { tenant } = useContext(AuthContext)
    const [ myProducts, setMyProducts ] = useState([])
    const { selectedCategory } = useContext(CategoryContext)

    useEffect(() => {
        if(tenant) {
            fetchMyProducts()
        }
    }, [tenant])

    const fetchMyProducts = async () => {
        try{
            const response = await fetch("http://localhost:3001/products", {
                headers: {
                    tenantId: tenant,
                },
            });

            if(!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`)
            }
            const data = await response.json()
            const normalizedData = data.map(item => item.product)

            setMyProducts(normalizedData)
        } catch (error) {
            console.error("Error al obtener productos:", error)
        }
    }
    

    const filteredProducts = selectedCategory.myProducts
        ?   myProducts.filter(product => 
                product.category.some(
                    cat => cat.trim() === selectedCategory.myProducts
                )
            )
        : myProducts;

    return { myProducts, filteredProducts }
}