import React from 'react'
import { RootConsumer } from '../../providers/RootProvider'

import './navbar.scss'

import NavbarToggleButton from '../navbarTogglebutton/NavbarToggleButton'
import Avatar from '../avatar/Avatar'

export default ({ toggleButtonState, toggleButtonHandler }) => {
  return (
    <nav className="navbar-component navbar navbar-dark bg-primary">
      <RootConsumer>
        {ctx => ctx.sideBarMustShow ? <NavbarToggleButton active={toggleButtonState} onClickHandler={toggleButtonHandler} /> : ''}
      </RootConsumer>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <RootConsumer>
            {ctx => ctx.user ? <Avatar className="float-left mr-2" username={ctx.user.username} size={31} /> : ''}
          </RootConsumer>
          <a href="/user/logout" className="nav-link float-left" title="Logout"><i className="material-icons">exit_to_app</i></a>
        </li>
      </ul>
    </nav>
  )
}
