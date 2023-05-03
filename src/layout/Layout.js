import React from 'react'
import Navbar from "@/components/header/Navbar"
import Footer from "@/components/footer/Footer"
import Head from 'next/head'


const Layout = ({children}) => {
  return (
    <div className="h-screen my-0 mx-0">
      <Head>
        <title>Himal Tamang | React/Typescript Developer</title>
      </Head>
      <Navbar />
        <div>
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout