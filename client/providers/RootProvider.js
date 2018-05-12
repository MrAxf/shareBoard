import React, { Component } from 'react'
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
    dispatch: action => this.setState(state => reducer(state, action))
    
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