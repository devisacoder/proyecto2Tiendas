import { useContext } from 'react'
import { useCategories } from '../../hooks/useCategories'
import { Search } from '../search/search'
import './sidebarCategories.css'
import { CategoryContext } from '../../context/Categories'

export const SidebarCategories = () => {
    const { uniqueCategories, handleClick  } = useCategories()
    const { selected } = useContext(CategoryContext)
    
    return(
        <div className="container-sidebar">
            <h2 className='title-sidebar'>Categories</h2>
            <div className='search-sidebar'>
                <Search/>
            </div>
            <div className="scrollable-categories">
                <ul className="ul-sidebar">
                    {uniqueCategories.map((cat) => (
                        <li 
                            key={cat}
                            onClick={() => handleClick(cat)}
                            className={selected === cat ? 'active-category' : ''}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}