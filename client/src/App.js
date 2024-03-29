import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import UserDashboard from './Dashboard/UserDashboard';
import Documents from './Dashboard/Documents';
import Profile from './Dashboard/Profile';
import ChangePassword from './Dashboard/ChangePassword';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Error404 from './Pages/Error404';
import Register from './Pages/Register';
import PrivateRoutes from './components/PrivateRoutes';
import { useAuth } from './context/authContext';


function App() {
  const [auth,setAuth] = useAuth();
  const navigate = useNavigate();
  return (
    <div>

      <Routes>

        {/* ----Non Protected Routes---- */}
        <Route path='/' element={<Home/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        {/* ----Protected Routes---- */}
        
        <Route element={<PrivateRoutes/>}>
        <Route path='/dashboard/user' element={<UserDashboard/>}>
            <Route path='documents' element={<Documents/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='change-password' element={<ChangePassword/>}/>
        </Route>
        </Route>

        <Route path='*' element={<Error404/>}/>

      </Routes>
    </div>
  );
}

export default App;
