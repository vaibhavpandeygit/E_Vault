import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom'
import './CSS/Login.css'
import axios from 'axios'
import { useAuth } from '../context/authContext'
import toast from 'react-hot-toast'

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const [auth,setAuth]= useAuth();

  const handleLogin= async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/e_vault/auth/login',{
        email: email,
        password:password
      })
      console.log(response)
      await setAuth({
        ...auth,
        user: response.data.user,
        token: response.data.token
      })

      if(response && response.data.success){
        toast.success(response.data.message)
        localStorage.setItem('auth',JSON.stringify({
          user: response.data.user,
          token: response.data.token
        }))
      }
      else{
        toast.error(response.data.message)
      }

      setEmail("");
      setPassword("");
      
        navigate('/dashboard/user')
      
    } catch (error) {
      console.log(error)
    }
  }

  



  return (
    <>
      <Layout>
        <div className="form-container">
          <form onSubmit={handleLogin}>
            <h4 className="title">Login</h4>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="buttondiv">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
            <button onClick={()=>{navigate('/register')}} className="mt-1 btn btn-success">
                Register
              </button>

            
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Login
