import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [ tenant, setTenant ] = useState(null);
    const [loading, setLoading] = useState(true);
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
        setLoading(false)
    }, [])

    const login = (token) => {
        sessionStorage.setItem('token', token);

        const decoded = jwtDecode(token);
        
        setTenant(decoded.tenantid);
        navigate('/home');
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        setTenant(null);
        navigate('/login');
    }

    if (loading) {
        return <div className="loading-screen">Cargando...</div>;
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