import searchIcon from '../../assets/searchIcon.svg'
import './search.css'

export const Search = () => {
    return(
        <div className='container-search'>
            <input 
                type="text"
                placeholder="Search"
                className="input-search"
            />
            <button className='button-input' aria-label='boton para buscar productos'><img src={searchIcon} alt="icono de lupa" /></button>
        </div>
    )
}