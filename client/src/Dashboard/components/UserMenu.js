import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const UserMenu = () => {

  const [auth,setAuth] = useAuth();

  const handleLogout=()=>{
    localStorage.removeItem('auth')
    setAuth({
      ...auth,
      user: null,
      token: ""
    })
  }
  return (
    <div>
      <ul className="list-group mt-2">
        <li className="list-group-item m-1 p-2"><Link to='/dashboard/user/profile' style={{"textDecoration":"none"}}>Profile</Link></li>
        <li className="list-group-item m-1 p-2"><Link to='/dashboard/user/documents' style={{"textDecoration":"none"}}>Documents</Link></li>
        <li className="list-group-item m-1 p-2"><Link to='/dashboard/user/change-password' style={{"textDecoration":"none"}}>Change Password</Link></li>
        <li className="list-group-item m-1 p-2"><button onClick={handleLogout} className='btn btn-danger'>Logout</button></li>
      </ul>
    </div>
  );
}

export default UserMenu