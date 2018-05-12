import React, { Component } from 'react'
import { RootConsumer, RootActions } from '../../providers/RootProvider'

import './project.scss'

import Page from '../Page';
import Header from '../../components/header/Header'
import { AddBlackboardLink, BlackboardLink } from '../../components/blackboardLink/BlackboardLink'

class Projects extends Page {
  test = [
    {id:1, title:"Blackboard 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo magnam eos unde tempore praesentium saepe facilis incidunt, iste nam."},
    {id:2, title:"Blackboard 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo magnam eos unde tempore praesentium saepe facilis incidunt, iste nam."},
    {id:3, title:"Blackboard 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo magnam eos unde tempore praesentium saepe facilis incidunt, iste nam."},
    {id:4, title:"Blackboard 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo magnam eos unde tempore praesentium saepe facilis incidunt, iste nam."},
    {id:5, title:"Blackboard 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo magnam eos unde tempore praesentium saepe facilis incidunt, iste nam."}
  ]

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
            {this.test.map(item => (
              <BlackboardLink blackboard={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
