import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [ tenant, setTenant ] = useState(null);



    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if(token) {
            try{
                const decoded = jwtDecode(token);
                setTenant(decoded.tenantid);
                navigate('/home');
            }catch(error) {
                logout();
            }
        }
    }, [])

    const login = (token) => {
        console.log('Login ejecutado');
        sessionStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        console.log('Token decodificado:', decoded);
        setTenant(decoded.tenantid);
        navigate('/home');
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        setTenant(null);
        navigate('/login');
    }

    return (
        <AuthContext.Provider
            value={{
                tenant,
                login,
                logout,
                isAuthenticated: !!tenant            
            }}
        >
            {children}
        </AuthContext.Provider>
    )
} 