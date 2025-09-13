// src/layouts/MainLayout.js
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where child route content will be rendered */}
    </>
  )
}

export default MainLayout
