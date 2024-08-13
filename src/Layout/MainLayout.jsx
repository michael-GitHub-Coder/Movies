import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
const MainLayout = () => {
  return <>
    <NavBar/>
    <Outlet/>
    <Footer />
  </>
}

export default MainLayout