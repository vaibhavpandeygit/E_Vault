import { Navigate, Outlet, Route } from 'react-router-dom'
import { useAuth } from '../context/authContext';

const PrivateRoutes = ({children, ...rest}) => {

    const [auth,setAuth] = useAuth();

  return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes
