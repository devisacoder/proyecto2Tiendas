import userIcon from '../../assets/userIcon.svg' 
import './users.css'

export const Users = () => {
    return(
        <img src={userIcon}  className="img-user" alt="icono del usuario"/>
    )
}