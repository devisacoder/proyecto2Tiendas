import { useContext } from 'react'
import searchIcon from '../../assets/searchIcon.svg'
import './search.css'
import { ProductsToBuyContext } from '../../context/ProductsToBuyContext'

export const Search = () => {
    const { search, setSearch } = useContext(ProductsToBuyContext)

    return(
        <div className='container-search'>
            <input 
                type="text"
                placeholder="Search"
                value={search}
                className="input-search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='button-input' aria-label='boton para buscar productos'><img src={searchIcon} alt="icono de lupa" /></button>
        </div>
    )
}