import React, { Component } from 'react'

export default class Page extends Component {
  componentDidMount(){
    const {rootData, sidenavEnable} = this.props
    rootData.dispatch(sidenavEnable)
  }
}
