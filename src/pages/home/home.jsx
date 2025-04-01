import { Header } from "../../components/header/header"
import { Products } from "../../components/products/products"
import { SidebarCategories } from "../../components/sidebarCategories/sidebarCategories"
import './home.css'

export const Home = () => {
    return(
        <>
            <Header/>
            <div className="containerHome">
                <SidebarCategories />
                <Products />
            </div>
        </>
    )
}