import { useEffect, useState, createContext } from "react";
import { useLocation } from "react-router-dom";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({
        productsToBuy: "",
        myProducts: "",
    });

    const location = useLocation(); 

    useEffect(() => {
        const stored = sessionStorage.getItem("selectedCategory");

        try {
            const parsed = JSON.parse(stored);
            if (parsed && typeof parsed === "object") {
                setSelectedCategory(parsed);
            }
        } catch (err) {
            console.warn("Datos inválidos en sessionStorage:", err);
            sessionStorage.removeItem("selectedCategory");
        }

        setIsInitialized(true);
    }, []);


    useEffect(() => {
        setSelectedCategory((prev) => {
            const updated = { ...prev };

            if (location.pathname === "/my-products") {
                updated.productsToBuy = "";
            } else if (location.pathname === "/products-to-buy-page") {
                updated.myProducts = "";
            }

            sessionStorage.setItem("selectedCategory", JSON.stringify(updated));
            return updated;
        });
    }, [location.pathname]);

    
    const setCategory = (section, category) => {
        setSelectedCategory((prevCategories) => {
            const updated = {
                ...prevCategories,
                [section]: category,
            };

            sessionStorage.setItem("selectedCategory", JSON.stringify(updated));
            return updated;
        });
    };

    const selected =
    location.pathname === '/products-to-buy-page'
        ? selectedCategory.productsToBuy
        : location.pathname === '/my-products'
        ? selectedCategory.myProducts
        : null


    const clearSelectedCategory = () => {
        setSelectedCategory(null)
    } 

    return (
        <CategoryContext.Provider
            value={{
                selectedCategory,
                setCategory,
                isInitialized,
                clearSelectedCategory,
                selected
                
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};
