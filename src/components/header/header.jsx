import { Users } from '../users/users'
import './header.css'
import cartIcon from '../../assets/cartIcon.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

export const Header = () => {
    const { cartTotalQuantity } = useContext(ProductContext)

    return(
        <header className='container-header'>
            <Link to='/products-to-buy-page'>Products to buy</Link>
            <Link to='/my-products'>My Products</Link>
            <div className='container-header-icons'>
                <Users/>
                <Link to='/cart' className='cart-link'>
                    <img className='cartIcon' src={cartIcon} alt="" />
                    {cartTotalQuantity > 0 && (
                        <span className="cart-count">{cartTotalQuantity}</span>
                    )}
                </Link>
            </div>
        </header>
    )
}