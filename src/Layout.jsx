import { Outlet } from "react-router-dom"
import { Header } from "./components/header/header"
import { SidebarCategories } from "./components/sidebarCategories/sidebarCategories"
import './Layout.css'

export const Layout = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="content-container">
                <SidebarCategories />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}