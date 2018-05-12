import React from 'react'

import './navbarToggleButton.scss'

export default ({active, onClickHandler}) => {
  const classes = `navbar-toggle-button ${active ? 'navbar-toggle-button-active' : 'navbar-toggle-button-no-active'}`
  return (
    <div className={classes} onClick={onClickHandler}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  )
}
