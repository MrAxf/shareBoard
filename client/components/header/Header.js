import React from 'react'

import './header.scss'

export default ({children, title}) => {
  return (
    <div className="row header-component bg-success text-white px-2 px-md-5">
      <div className="container">
        <div className="row">
          <h1 className="my-5">{title}</h1>
        </div>
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  )
}
