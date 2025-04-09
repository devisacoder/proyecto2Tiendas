import { Header } from "../../components/header/header"
import { ProductsToBuy } from "../../components/productsToBuy/productsToBuy"
import { SidebarCategories } from "../../components/sidebarCategories/sidebarCategories"
import './ProductsToBuyPage.css'

export const ProductsToBuyPage = () => {
    return(
        <>
            <Header/>
            <div className="containerHome">
                <SidebarCategories />
                <ProductsToBuy />
            </div>
        </>
    )
}