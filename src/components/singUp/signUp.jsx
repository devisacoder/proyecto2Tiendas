import { Link } from 'react-router-dom'
import '../login/login.css'
import { useSignUp } from '../../hooks/useSignUp'

export const SignUp = () => {
    const {
        error,
        handleInputChange,
        handleSubmit,
        formData,
        isLoading
    } = useSignUp()

    return(
        <div className="container-login">
            <form className="form-login" onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                {error && <div className="error-message">{error}</div>}


                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />

                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                />

                <input 
                    type="text" 
                    name="city" 
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                />

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            
                <button type='submit' disabled={isLoading}>
                    {isLoading ? "Registering..." : " SIGN UP"}
                </button>

                <Link className='link-sign-up' to='/logIn'>Already have an account?</Link>
            </form>
        </div>
    )
}