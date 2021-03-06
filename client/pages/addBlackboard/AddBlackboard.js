import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './addBlackboard.scss'

import Page from '../Page';
import Header from '../../components/header/Header'
import BlackboardForm from '../../components/blackboardForm/BlackboardForm'

class AddBlackboard extends Page {

  render() {
    return (
      <div className="add-blackboard container-fluid">
        <Header title="Create a blackboard.">
          <div className="col col-12 col-md-6">
            <h3 className="mb-3">Complete the form to create a blackboard</h3>
          </div>
        </Header>
        <div className="container form py-5">
          <BlackboardForm history = { this.props.history } user={this.props.rootData.user}/>
        </div>
      </div>
    )
  }
}

export default withRouter(AddBlackboard)
