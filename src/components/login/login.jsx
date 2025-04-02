import { Link } from "react-router-dom"
import "./login.css"
import { useLogin } from "../../hooks/useLogin"

export const Login = () => {
    const {
        error,
        handleInputChange,
        handleSubmit,
        formData
    } = useLogin()

    return(
        <div className="container-login">
            <form className="form-login" onSubmit={handleSubmit}>
                <h2>Login</h2>

                {error && <div className="error-message">{error}</div>}

                <input
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                 />

                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    name="city" 
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                />

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            
                <button type="submit">LOGIN</button>
                <p>or</p>
                <Link to="/signUp" className="link-sign-up">Sign up</Link>
            </form>
        </div>
    )
}