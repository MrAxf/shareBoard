import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './notFound.scss'

import Page from '../Page';

class NotFound extends Page {

  state={
    number1: Math.floor(Math.random() * 9),
    number2: Math.floor(Math.random() * 9),
    number3: Math.floor(Math.random() * 9)
  }
  then=0

  componentDidMount(){
    this.then=Date.now()
    this.animate(0);
  }

  getNumber(index, time){
    if(time < 1000*index) return Math.floor(Math.random() * 9)
    else if(index==1) return 4
    return 0
  }

  animate(time){
    const now = Date.now()
    const delta = now - this.then
    this.then = now

    time += delta

    this.setState({
      number1: this.getNumber(1, time),
      number2: this.getNumber(2, time),
      number3: Math.floor(Math.random() * 9)
    })

    if(time < 3000) requestAnimationFrame(this.animate.bind(this, time))
    else this.setState({number3: 4})
  }

  render() {
    return (
      <div className="not-found bg-success text-white text-center h-100 pt-5">
        <h1 className="text-center">{`${this.state.number1}${this.state.number2}${this.state.number3}`}</h1>
        <h5 className="text-center mb-5">Page not found</h5>
        <Link to="/app" className="btn btn-primary">Back to main page</Link>
      </div>
    )
  }
}

export default NotFound;