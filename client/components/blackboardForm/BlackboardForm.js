import React, { Component } from 'react'
import { addBlackboard, updateBlackboard, deleteBlackboard } from '../../providers/BlackboardProvider'

import MultiSelect from '../multiSelect/MultiSelect'

export default class BlackboardForm extends Component {

  static defaultProps = {
    blackboard: {
      _id: null
    }
  }

  state = {
    error: ""
  }

  blackboardTitle = React.createRef()
  blackboardDescription = React.createRef()
  blackboardShared = React.createRef()

  addBlackboard(e){
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

  updateBlackboard(e){
    e.preventDefault()
    const { history, blackboard } = this.props
    const { _id } = blackboard

    this.setState({error: ""})

    const title = this.blackboardTitle.current.value
    const description = this.blackboardDescription.current.value
    const sharedWith = this.blackboardShared.current.value
    updateBlackboard(_id, {title, description, sharedWith})
      .then(res => history.push('/app'))
      .catch(err => this.setState({error: "Title is required"}))
  }

  deleteBlackboard(e){
    e.preventDefault()
    const { history, blackboard } = this.props
    const { _id } = blackboard

    this.setState({error: ""})

    deleteBlackboard(_id)
      .then(res => history.push('/app'))
      .catch(err => this.setState({error: "Error on delete"}))
  }

  render() {
    const { blackboard } = this.props
    const { _id, title, description, sharedWith } = blackboard
    return (
      <form onSubmit={ _id ? this.updateBlackboard.bind(this) : this.addBlackboard.bind(this) }>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">Title(*)</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" defaultValue={title} id="title" placeholder="Title" ref={this.blackboardTitle} />
            <p className="text-danger font-weight-bold">{this.state.error}</p>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" defaultValue={description} id="description" placeholder="Description" ref={this.blackboardDescription} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="shared" className="col-sm-2 col-form-label">Shared with</label>
          <div className="col-sm-10">
            <MultiSelect className="" defaultValue={sharedWith} user={this.props.user} ref={this.blackboardShared} id="shared" placeholder="Type 4 or more characters to find a user..." />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">{ _id ? 'Update' : 'Add' } blackboard</button>
            { _id ? <button onClick={this.deleteBlackboard.bind(this)} className="btn btn-danger ml-3">Delete blackboard</button> : '' }
          </div>
        </div>
      </form>
    )
  }
}

