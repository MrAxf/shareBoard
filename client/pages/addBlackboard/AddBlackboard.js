import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { addBlackboard } from '../../providers/BlackboardProvider'

import './addBlackboard.scss'

import Page from '../Page';
import Header from '../../components/header/Header'
import MultiSelect from '../../components/multiSelect/MultiSelect'

class AddBlackboard extends Page {

  state = {
    error: ""
  }

  blackboardTitle = React.createRef()
  blackboardDescription = React.createRef()
  blackboardShared = React.createRef()

  handleSubmit(e){
    e.preventDefault()
    const { history } = this.props

    this.setState({error: ""})

    const title = this.blackboardTitle.current.value
    const description = this.blackboardDescription.current.value
    const sharedWith = this.blackboardShared.current.value
    addBlackboard({title, description, sharedWith})
      .then(res => history.push('/app'))
      .catch(err => this.setState({error: "Title is required"}))
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
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">Title(*)</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="title" placeholder="Title" ref={this.blackboardTitle} />
                <p className="text-danger font-weight-bold">{this.state.error}</p>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea className="form-control" id="description" placeholder="Description" ref={this.blackboardDescription} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="shared" className="col-sm-2 col-form-label">Shared with</label>
              <div className="col-sm-10">
                <MultiSelect className="" user={this.props.rootData.user} ref={this.blackboardShared} id="shared" placeholder="Type 4 or more characters to find a user..." />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Add blackboard</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(AddBlackboard)
