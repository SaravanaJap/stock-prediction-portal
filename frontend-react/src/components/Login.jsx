import axios from 'axios'
import React ,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Login = () => {
        const [username,setUsername] = useState('')
        const [password,setPassword] = useState('')
        const [loading,setLoading] = useState(false)
        const [error,setError] = useState('')
        const navigate = useNavigate()
        const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

        const handleLogin = async (e) =>{
            e.preventDefault();
            setLoading(true);

            const userData = {
                username,password
            }
            console.log(userData);

            try{
                const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
                localStorage.setItem('accessToken',response.data.access)
                localStorage.setItem('refreshToken',response.data.refresh)
                console.log('Login successful')
                setIsLoggedIn(true)
                navigate('/dashboard')
            }catch(error){
                console.error('Invalid credentials')
                setError('Invalid credentials')
            }finally{
                setLoading(false)
            }
        }
  return (
    <>
    <div className ='container'>
            <div className = 'row justify-content-center  p-5 '>
                <div className = 'col-md-6 bg-light-dark p-5'>
                    <h3 className = 'text-light'>Login to our Portal</h3>
                    <form onSubmit = {handleLogin} > 
                        <div className = 'mb-3'>
                        <input type = 'text' className = 'form-control'  placeholder = "Username" value={username} onChange ={ (e) => setUsername(e.target.value) }  ></input>
                        
                        </div>

                        <div className = 'mb-5'>
                        <input type = 'password' className = 'form-control mb-3'  placeholder = "Password" value = {password} onChange = {(e)=> setPassword(e.target.value)}  ></input>
                       
                        </div>

                        {error && <div className = 'text-danger'>{error}</div>}
                        
                        
                        {loading ? (
                            <button type = 'submit' className = 'btn btn-success d-block mx-auto' disabled >Please wait...</button>
                        ) : (
                            <button type = 'submit' className = 'btn btn-success d-block mx-auto'>Register</button>
                        ) }
                        
                    </form>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Login