import React, { Component } from 'react'
import { subscribe, unsubscribe, emitDraw } from '../../providers/SocketProvider'

import './blackboard.scss'

import Page from '../Page';

class Blackboard extends Page {

  canvas = React.createRef()
  drawing = false

  constructor(props){
    super(props)
    
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()

    const { id } = this.props

    this.ctx = this.canvas.current.getContext("2d")

    document.addEventListener("mousedown", this.handleMouseDown)
    document.addEventListener("mouseup", this.handleMouseUp)
    document.addEventListener('mousemove', this.handleMouseMove)
    
    subscribe(id)
      .onDraw((data => {
        const { oX, oY, dX, dY } = JSON.parse(data)
        this.draw(oX, oY, dX, dY)
      }).bind(this))
  }

  componentWillUnmount(){
    const { id } = this.props

    unsubscribe(id)

    document.removeEventListener("mousedown", this.handleMouseDown)
    document.removeEventListener("mouseup", this.handleMouseUp)
    document.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseDown(e) {
    this.prevCoords = this.getMousePos(e)
    this.drawing = true
    e.preventDefault()
    e.stopPropagation()
  }

  handleMouseUp(e) {
    this.drawing = false
    e.stopPropagation()
  }

  handleMouseMove(e){
    const { id } = this.props
    if (this.drawing){
      const { x, y } = this.getMousePos(e)
      //this.draw(this.prevCoords.x, this.prevCoords.y, x, y)
      emitDraw(id, this.prevCoords.x, this.prevCoords.y, x, y)
      this.prevCoords = { x, y }
    }
  }

  draw(oX, oY, dX, dY) {
    this.ctx.strokeStyle="white";
    this.ctx.lineWidth=3;
    this.ctx.beginPath();
    this.ctx.moveTo(Math.round(oX), Math.round(oY))
    this.ctx.lineTo(Math.round(dX), Math.round(dY))
    this.ctx.closePath();
    this.ctx.stroke();
    
  }

  getMousePos(e) {
    const rect = this.canvas.current.getBoundingClientRect()
    return {
      x: ((e.clientX - rect.left) / rect.width) * 1280,
      y: ((e.clientY - rect.top) / rect.height) * 720
    };
  }

  render() {
    return (
      <div className="blackboard container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col py-5 col-sm-8">
            <div className="blackboard-container">
              <canvas width="1280px" height="720px" id="blackboard-canvas" ref={this.canvas}>
              </canvas>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blackboard;
