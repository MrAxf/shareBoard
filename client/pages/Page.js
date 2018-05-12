import React, { Component } from 'react'

export default class Page extends Component {
  componentDidMount(){
    const {rootData, sidenavEnable} = this.props
    console.log(this.props)
    rootData.dispatch(sidenavEnable)
  }
}
