import { Users } from '../users/users'
import './header.css'

export const Header = () => {
    return(
        <header className='container-header'>
            <h2>Products to buy</h2>
            <h2>My Products</h2>
            <Users/>
        </header>
    )
}