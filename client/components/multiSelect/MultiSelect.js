import React, { Component } from 'react'
import { getUsersByUsername } from '../../providers/UserProvider'

import './multiSelect.scss'

import Avatar from '../avatar/Avatar'

export default class MultiSelect extends Component {

  state = {
    selected: [{ username: "Axford", id: 1 }, { username: "Axford2", id: 2 }],
    searchedUsers: [],
    dropdownVisible: false,
    findingUsers: false
  }
  searchInput = React.createRef()

  handleRemoveUser(index) {
    const arr = [...this.state.selected]
    arr.splice(index, 1)
    this.setState({ selected: arr })
  }

  handleChange(e) {
    if (this.searchInput.current.value.length > 3) {
      this.setState({ dropdownVisible: true, findingUsers: true })
      getUsersByUsername(this.searchInput.current.value)
        .then(res => this.setState({ findingUsers: false, searchedUsers: res.data}))
        .catch(err => console.log(err))
    }
    else this.setState({ dropdownVisible: false })
  }

  render() {
    const { id, placeholder, className } = this.props
    return (
      <div className={`multi-select ${className}`}>
        <div className="col-12 py-2 px-0">
          {
            this.state.selected.map((user, index) => (
              <span className="badge badge-pill badge-light mr-1" key={user.id}>
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
          {
            this.state.findingUsers ?
              (
                <div className="dropdown-element text-center loading">
                  <span className="material-icons">replay</span>
                </div>
              ) : (
                this.state.searchedUsers.map(user => (
                  <div className="dropdown-element" key={user._id}>
                    <Avatar className="float-left m-2" username={user.username} size={34} />
                    <span>{user.username}</span>
                  </div>
                ))
              )
          }
        </div>
      </div>
    )
  }
}
