import React from 'react'
import { RootConsumer } from '../../providers/RootProvider'

import './navbar.scss'

import NavbarToggleButton from '../navbarTogglebutton/NavbarToggleButton'

export default ({toggleButtonState, toggleButtonHandler}) => {
  return (
    <nav className="navbar-component navbar navbar-dark bg-primary">
      <RootConsumer>
        {context => context.sideBarMustShow ? <NavbarToggleButton active={toggleButtonState} onClickHandler={toggleButtonHandler}/> : ''}
      </RootConsumer>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/user/logout" className="nav-link" title="Logout"><i className="material-icons">exit_to_app</i></a>
        </li>
      </ul>
    </nav>
  )
}
