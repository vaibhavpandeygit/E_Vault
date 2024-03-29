import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [auth,setAuth] = useAuth();

  return (
    <div>
      <div class="card" style={{"width": "20rem"}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: {auth.user.name}</li>
          <li class="list-group-item">Email: {auth.user.email}</li>
          <li class="list-group-item"><button onClick={()=>navigate('/dashboard/user/documents')} className='btn btn-success m-1 mt-2'>Upload Docs</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Profile
