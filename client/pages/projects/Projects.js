import React, { Component } from 'react'
import { RootConsumer, RootActions } from '../../providers/RootProvider'
import { getMyBlackboards } from '../../providers/BlackboardProvider'

import './project.scss'

import Page from '../Page';
import Header from '../../components/header/Header'
import { AddBlackboardLink, BlackboardLink } from '../../components/blackboardLink/BlackboardLink'

class Projects extends Page {
  
  state = {
    projects: []
  }

  componentDidMount(){
    super.componentDidMount()
    getMyBlackboards()
      .then(res => this.setState({projects: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="projects container-fluid">
        <Header title="Welcome to ShareBoard!">
          <div className="col col-12 col-md-6">
            <h3 className="mb-3">A place to create your personal blackboards and share it in live!</h3>
            <h5>Select or create one.</h5>
          </div>
        </Header>
        <div className="container">
          <div className="row">
            <AddBlackboardLink/>
            {this.state.projects.map(item => (
              <BlackboardLink blackboard={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
