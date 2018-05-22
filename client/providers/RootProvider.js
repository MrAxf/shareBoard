import React, { Component } from 'react'
import { getMyUser } from './UserProvider'

const RootContext = React.createContext()

const reducer = (state, action) => {
  if(action.type == "SHOW_SIDEBAR"){
    return {...state, sideBarMustShow: action.payload}
  }
  return state
}

export class RootProvider extends Component {
  
  state = {
    sideBarMustShow: false,
    user: null,
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount(){
    getMyUser()
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <RootContext.Provider value={this.state}>
        {this.props.children}
      </RootContext.Provider>
    )
  }
}

export const RootConsumer = RootContext.Consumer

export const RootActions = {
  ENABLE_SIDEBAR: {type: "SHOW_SIDEBAR", payload: true},
  DISABLE_SIDEBAR: {type: "SHOW_SIDEBAR", payload: false}
}