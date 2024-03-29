import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Header = () => {

  const [auth,setAuth] = useAuth();

  return (
    <>
      <nav style={{"width":"100%"}} className="navbar py-3 navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand text-white" href="#">
            E Vault
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {auth.token ? <li className="nav-item">
                <Link to='/dashboard/user' className="nav-link text-white" href="#">
                  Dashboard
                </Link>
              </li> : <li className="nav-item">
                <Link to='/login' className="nav-link text-white">
                  Login
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header