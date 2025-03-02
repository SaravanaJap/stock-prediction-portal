import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState({})
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)

    const handleRegistration = async (e) =>{
        e.preventDefault();
        setLoading(true);

        const userData = {
            username,email,password
        }

        //await to wait for response also async
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
            console.log(response.data)
            console.log('success')
            setErrors({})
            setSuccess(true)
        }catch(error){
            setErrors(error.response.data)
            console.error('Registration error',error.response.data)
        }finally{
            setLoading(false)
        }
    } 
  return ( 
    <>
        <div className ='container'>
            <div className = 'row justify-content-center  p-5 '>
                <div className = 'col-md-6 bg-light-dark p-5'>
                    <h3 className = 'text-light'>Create an Account</h3>
                    <form onSubmit = {handleRegistration} > 
                        <div className = 'mb-3'>
                        <input type = 'text' className = 'form-control'  placeholder = "Username" value={username} onChange ={ (e) => setUsername(e.target.value) }  ></input>
                        <small>{errors.username && <div className = 'text-danger'>{errors.username}</div> }</small>
                             
                        </div>
                        <div className = 'mb-3'>
                        <input type = 'email' className = 'form-control mb-3'  placeholder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value) }  ></input>
                        </div>
                        <div className = 'mb-5'>
                        <input type = 'password' className = 'form-control mb-3'  placeholder = "Password" value = {password} onChange = {(e)=> setPassword(e.target.value)}  ></input>
                        <small>{errors.password && <div className = 'text-danger'>{errors.password}</div> }</small>
                        </div>
                        
                        { success && <div className = 'alert alert-success'> Registratin Successful </div> }
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

export default Register