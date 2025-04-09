import { useNavigate } from "react-router-dom"

export const useSignUp = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        address: '',
        city: '',
        password: '',
    })

    const [ error, setError ] = useState('')
    const [ isLoading, setIsLoading ]  = useState(false)
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try{
            if(formData.password.length < 6) {
                throw new Error('The password must be at least 6 characters long.')
            }

            const response = await fetch('http://localhost:3001/branch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }) 

            const data = await response.json();
            
            if(!response.ok) {
                throw new Error(data.message || 'Registration error') 
            }
       
            navigate('/login')
        }catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        error,
        handleInputChange,
        handleSubmit,
        formData, 
        isLoading
    }
}