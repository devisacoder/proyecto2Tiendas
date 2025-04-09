import { useCategories } from '../../hooks/useCategories'
import { Search } from '../search/search'
import './sidebarCategories.css'

export const SidebarCategories = () => {
    const { uniqueCategories, handleClick } = useCategories()

    return(
        <div className="container-sidebar">
            <h2 className='title-sidebar'>Categories</h2>
            <div className='search-sidebar'>
                <Search/>
            </div>
            <ul className="ul-sidebar">
                {uniqueCategories.map((cat) => (
                    <li 
                        key={cat}
                        onClick={() => handleClick(cat)}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    )
}