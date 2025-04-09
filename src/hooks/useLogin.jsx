import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export const useLogin = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        address: '',
        city: '',
        password: ''
    })

    const [ error, setError ] = useState('')
    const { login } = useContext(AuthContext)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
         
        try{
            const response  = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })

            if(!response.ok) {
                const errorData =await response.json()
                throw new Error(errorData.message || 'Error de autenticacion')
            }

            const { token } = await response.json();
            login(token);
        } catch(err) {
            setError(err.message)
            console.error('Login error:', err)
        }
    }

    return{
        error,
        handleInputChange,
        handleSubmit,
        formData
    }
}