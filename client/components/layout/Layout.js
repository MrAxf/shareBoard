import React, { Component } from 'react'
import { RootConsumer } from '../../providers/RootProvider'

import './layout.scss'

import Navbar from '../navbar/Navbar'
import Sidenav from '../sidenav/Sidenav'

export default class Layout extends Component{

  state={
    sidenavOpen: true
  }

  toggleButtonHandler(e){
    this.setState({sidenavOpen: !this.state.sidenavOpen});
  }

  render(){
    return (
      <div className="layout w-100 h-100">
        <div className="inner">
          <RootConsumer>
            {context => context.sideBarMustShow ? <Sidenav open={this.state.sidenavOpen} /> : ''}
          </RootConsumer>
          <div className="main">
            <Navbar toggleButtonState={this.state.sidenavOpen} toggleButtonHandler={this.toggleButtonHandler.bind(this)}/>
            <div className="content p-5">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="bg-dark text-white text-center">
          <p className="mb-0">&copy; Axford</p>
        </footer>
      </div>
    )
  }
}
