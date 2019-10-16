import React from 'react'
import Head from 'next/head'
import Navbar from '../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css'

const MainLayout = ({children}) => (
  <div>
    <Head>
      <title>Animal Reality Exposed</title>
    </Head>
    <Navbar />
    {children}
  </div>
)

export default MainLayout
