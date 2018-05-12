import React, { Component } from 'react'

import './sidenav.scss'

export default class Sidenav extends Component {
  render() {
    return (
      <div className={`sidenav${this.props.open? '':' closed'} `}>
        
      </div>
    )
  }
}
