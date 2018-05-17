import React from 'react'
import { Link } from "react-router-dom";
import { RootConsumer } from '../../providers/RootProvider'

import './blackboardLink.scss'

export const AddBlackboardLink = () => {
  return (
    <div className="blackboard-link col col-12 col-sm-6 col-md-4 col-lg-3 p-2">
      <Link className="card text-center" to="/app/addblackboard">
        <i className="material-icons mt-5">add_circle_outline</i>
        <p>Add new board</p>
      </Link>
    </div>
  )
}

export const BlackboardLink = ({blackboard}) => {
  return (
    <div className="blackboard-link col col-12 col-sm-6 col-md-4 col-lg-3 p-2">
      <Link className="card board p-2" to={`/app/blackboar/${blackboard.id}`}>
        <h5 className="card-title">{blackboard.title}</h5>
        <p className="card-text">{blackboard.description}</p>
        <RootConsumer>
          {ctx => ctx.user._id == blackboard.owner ? <span className="material-icons text-right">person</span> : <span className="material-icons text-right">share</span>}
        </RootConsumer>
      </Link>
    </div>
  )
}
