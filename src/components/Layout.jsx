import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
function Layout() {
  return (
   <>
   <Navbar/>
   <main className="w-full min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">
   <Outlet/>
   </main>
   <Footer/>
   </>
  )
}

export default Layout
