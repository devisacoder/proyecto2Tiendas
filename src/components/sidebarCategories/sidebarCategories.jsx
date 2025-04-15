import { useContext, useState } from 'react'
import { useCategories } from '../../hooks/useCategories'
import { Search } from '../search/search'
import './sidebarCategories.css'
import { CategoryContext } from '../../context/CategoriesContext'

export const SidebarCategories = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { uniqueCategories, handleClick } = useCategories()
  const { selected } = useContext(CategoryContext)

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`container-sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <h2 className="title-sidebar" onClick={handleToggleSidebar}>
        Categories
      </h2>
      
      <div className="sidebar-content">
        <div className="search-sidebar">
          <Search />
        </div>
        <div className="scrollable-categories">
          <ul className="ul-sidebar">
            {uniqueCategories.map((cat) => (
              <li 
                key={cat}
                onClick={() => {
                    handleClick(cat)
                    setIsSidebarOpen(false)
                  }
                }
                className={selected === cat ? 'active-category' : ''}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
