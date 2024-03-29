import React, { useState } from 'react'
import Layout from '../components/Layout'
import './CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/authContext'
import toast from 'react-hot-toast'



const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const [auth,setAuth] = useAuth();
    

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/e_vault/auth/register',{
                name: name,
                email: email,
                password: password
            })
            setName("");
            setEmail("")
            setPassword("")

            if(response && response.data.success){
              toast.success(response.data.message)
            }
            else if(!response || response.data.success){
              toast.error(response.data.message)
            }

            setAuth({
              ...auth,
              user: response.data.user
            })
            navigate('/')
            console.log(response)
           
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <Layout>
      <div className='form-container'>
      <form onSubmit={handleSubmit}>
          <h4 className='title'>Register</h4>

          <div className="mb-3">
            <input
              type="text"
              value={name}
              className="form-control"
              placeholder='Name'
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder='Email'
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder='Password'
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <div className='buttondiv'>
          <button type="submit" className="btn btn-success">
            Register
          </button>
          </div>

          <p className='mt-1'>Allready have an account? <Link to={'/login'} className='text-muted'>Login Here</Link></p>
        </form>
      </div>
    </Layout>
  )
}

export default Register
