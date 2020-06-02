import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout: React.FC = ({ children }) => {
  console.log(children)
  return (
    <div className='MainLayout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
export default MainLayout