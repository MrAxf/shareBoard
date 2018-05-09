import React from 'react'

export default () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Navbar</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/user/logout" className="nav-link"><i className="material-icons">exit_to_app</i></a>
        </li>
      </ul>
    </nav>
  )
}
