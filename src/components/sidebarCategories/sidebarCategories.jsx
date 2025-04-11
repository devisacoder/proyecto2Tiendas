import { useCategories } from '../../hooks/useCategories'
import { Search } from '../search/search'
import './sidebarCategories.css'

export const SidebarCategories = () => {
    const { uniqueCategories, handleClick, selectedCategory  } = useCategories()

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
                            className={selectedCategory === cat ? 'active-category' : ''}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}