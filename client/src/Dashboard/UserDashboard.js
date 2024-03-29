import React from 'react'

import Layout from '../components/Layout'
import UserMenu from './components/UserMenu'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <Layout>
      <div style={{"border":"solid 3px","height":"100vh"}} className="container m-3 p-3">
        <div className="row">
          <div className="col-md-3"><UserMenu/></div>
          <div className="col-md-9"><Outlet/></div>
        </div>
      </div>
    </Layout>
  )
}

export default UserDashboard