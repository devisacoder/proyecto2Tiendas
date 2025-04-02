import { useContext, useState } from 'react'
import userIcon from '../../assets/userIcon.svg' 
import './users.css'
import { AuthContext } from '../../context/AuthContext'

export const Users = () => {
    const [ open, setOpen ] = useState(false)
    const { logout } = useContext(AuthContext)

    const handleClick = () => {
        setOpen(prev => !prev)
    }

    return(
        <div>

            <img src={userIcon} onClick={handleClick}  className="img-user" alt="icono del usuario"/>
        
            {open && (
                <div className='container-loug-out'>
                    <ul>
                        <li onClick={logout} className='link-logn-out'>Log out</li>
                    </ul>
                </div>
            )}
        </div>
    )
}