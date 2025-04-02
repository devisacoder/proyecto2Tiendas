import { Link } from 'react-router-dom'
import '../login/login.css'

export const SignUp = () => {
    return(
        <div className="container-login">
            <form className="form-login">
                <h2>Sign up</h2>

                <input type="text" name="name" placeholder="Name" />

                <input type="text" name="address" placeholder="Address"/>

                <input type="text" name="city" placeholder="City"/>

                <input type="text" name="password" placeholder="Password"/>
            
                <button>SIGN UP</button>

                <p>Ya tienes cuenta?</p>
                <Link className='link-sign-up' to='/logIn'>Already have an account?</Link>
            </form>
        </div>
    )
}