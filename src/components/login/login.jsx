import { Link } from "react-router-dom"
import "./login.css"

export const Login = () => {
    return(
        <div className="container-login">
            <form className="form-login" onSubmit={(e) => e.preventDefault()}>
                <h2>Login</h2>

                <input type="text" name="name" placeholder="Name" />

                <input type="text" name="address" placeholder="Address"/>

                <input type="text" name="city" placeholder="City"/>

                <input type="text" name="password" placeholder="Password"/>
            
                <button>LOGIN</button>
                <p>or</p>
                <Link to="/SignUp" className="link-sign-up">Sign up</Link>
            </form>
        </div>
    )
}