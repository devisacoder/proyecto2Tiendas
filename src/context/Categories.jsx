import { useState } from "react";
import { createContext } from "react";

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const [ selectedCategory, setSelectedCategory ] = useState({
        productsToBuy: "",
        myProducts: "",
    });

    const setCategory = (section, category) => {
        setSelectedCategory((prevCategories) => ({
            ...prevCategories,
            [section]: category,
        }));
    };

    return(
        <CategoryContext.Provider value={{
            selectedCategory,
            setCategory
        }}>
            {children}
        </CategoryContext.Provider>
    )
}