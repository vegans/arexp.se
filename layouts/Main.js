import React from 'react'
import Navbar from '../components/nav'

const MainLayout = ({children}) => (
  <div>
    <Navbar />
    {children}
  </div>
)

export default MainLayout
