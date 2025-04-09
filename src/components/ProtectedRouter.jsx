import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return(
        isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
    )
}