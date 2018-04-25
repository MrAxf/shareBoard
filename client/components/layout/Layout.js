import React from 'react'

import Navbar from '../navbar/Navbar'

import './layout.scss'

export default ({children}) => {
  return (
    <div className="layout w-100 h-100">
      <div className="inner">
        <div className="menu">
        
        </div>
        <div className="main">
          <Navbar/>
          <div className="content">
            {children}
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white text-center">
        <p className="mb-0">&copy; Axford</p>
      </footer>
    </div>
  )
}
