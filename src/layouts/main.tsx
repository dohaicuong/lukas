import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className='MainLayout'>
      <Navbar />
      <div className='content' style={{ minHeight: 'calc(100vh - 64px - 22px)' }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
export default MainLayout