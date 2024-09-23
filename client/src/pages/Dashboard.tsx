import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/RestaurantOwner/sideNav'
const Dashboard = () => {
  return (

    <div>
        <SideNav />
        <Outlet />
    </div>
  )

}

export default Dashboard