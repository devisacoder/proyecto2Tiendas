import { Search } from '../search/search'
import './sidebarCategories.css'
export const SidebarCategories = () => {
    return(
        <div className="container-sidebar">
            <h2 className='title-sidebar'>Categories</h2>
            <div className='search-sidebar'>
                <Search/>
            </div>
            <ul className="ul-sidebar">
                <li>Shoes</li>
                <li>Women's Clothing</li>
                <li>Baby Clothing</li>
                <li>Men's Clothing</li>
                <li>Home</li>
                <li>Baby Shoes</li>
                <li>Men's Shoes</li>
            </ul>
        </div>
    )
}