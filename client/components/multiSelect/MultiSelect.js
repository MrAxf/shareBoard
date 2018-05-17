import React, { Component } from 'react'
import { getUsersByUsername } from '../../providers/UserProvider'

import './multiSelect.scss'

import Avatar from '../avatar/Avatar'

export default class MultiSelect extends Component {

  state = {
    selected: [],
    searchedUsers: [],
    dropdownVisible: false,
    findingUsers: false
  }
  searchInput = React.createRef()

  get value(){
    return this.state.selected.map(user => user._id)
  }

  handleRemoveUser(index) {
    const arr = [...this.state.selected]
    arr.splice(index, 1)
    this.setState({ selected: arr })
  }

  handleAddUser(user){
    this.setState({selected: [...this.state.selected, user]})
  }

  handleChange(e) {
    if (this.searchInput.current.value.length > 3) {
      this.setState({ dropdownVisible: true, findingUsers: true })
      getUsersByUsername(this.searchInput.current.value)
        .then(res => this.setState({ findingUsers: false, searchedUsers: res.data }))
        .catch(err => console.log(err))
    }
    else this.setState({ dropdownVisible: false })
  }

  getDropdownElements() {
    if (this.state.findingUsers) {
      return (
        <div className="dropdown-element text-center loading">
          <span className="material-icons">replay</span>
        </div>
      )
    }
    const arr = [...this.state.searchedUsers]
    const filteredArr = arr.filter(user => {
      if (user._id == this.props.user._id) return false;
      for (let i = 0; i < this.state.selected.length; i++) {
        if (this.state.selected[i]._id == user._id) return false
      }
      return true
    })
    if (filteredArr.length == 0) {
      return (
        <div className="dropdown-element text-center">
          <span>No users found.</span>
        </div>
      )
    }
    return filteredArr.map(user => (
      <div className="dropdown-element" key={user._id} onClick={e => this.handleAddUser(user)} >
        <Avatar className="float-left m-2" username={user.username} size={34} />
        <span>{user.username}</span>
      </div>
    ))
  }

  render() {
    const { id, placeholder, className } = this.props
    return (
      <div className={`multi-select ${className}`}>
        <div className="col-12 py-2 px-0">
          {
            this.state.selected.map((user, index) => (
              <span className="badge badge-pill badge-light mr-1" key={user._id}>
                {user.username}
                <button type="button" className="close" aria-label="Close" onClick={e => this.handleRemoveUser(index)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </span>
            ))
          }
        </div>
        <input type="text" className="form-control" id={id} placeholder={placeholder} ref={this.searchInput} onChange={this.handleChange.bind(this)} />
        <div className={`dropdown-content${this.state.dropdownVisible ? ' show' : ''}`}>
          { this.getDropdownElements() }
        </div>
      </div>
    )
  }
}
