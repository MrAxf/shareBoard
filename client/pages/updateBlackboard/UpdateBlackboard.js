import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getBlackboard } from '../../providers/BlackboardProvider'

import './updateBlackboard.scss'

import Page from '../Page';
import Header from '../../components/header/Header'
import BlackboardForm from '../../components/blackboardForm/BlackboardForm'

class UpdateBlackboard extends Page {

  state = {
    blackboard: null
  }

  componentDidMount(){
    const { id } = this.props

    getBlackboard(id)
      .then(blackboard => this.setState({blackboard: blackboard.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="add-blackboard container-fluid">
        <Header title="Create a blackboard.">
          <div className="col col-12 col-md-6">
            <h3 className="mb-3">Complete the form to create a blackboard</h3>
          </div>
        </Header>
        <div className="container form py-5">
          {
            this.state.blackboard ? <BlackboardForm history = { this.props.history } user={this.props.rootData.user} blackboard={this.state.blackboard} /> : ''
          }
        </div>
      </div>
    )
  }
}

export default withRouter(UpdateBlackboard)
