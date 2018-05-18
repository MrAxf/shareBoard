import React, { Component } from 'react'

import './blackboard.scss'

import Page from '../Page';

class Blackboard extends Page {

  canvas = React.createRef()
  drawing = false

  componentDidMount() {
    super.componentDidMount()
    this.ctx = this.canvas.current.getContext("2d");
    document.addEventListener("mousedown", this.handleMouseDown.bind(this))
    document.addEventListener("mouseup", this.handleMouseUp.bind(this))
    document.addEventListener('mousemove', this.handleMouseMove.bind(this))
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
    if (this.drawing) this.draw(e)
  }

  draw(e) {
    const { x, y } = this.getMousePos(e)
    this.ctx.strokeStyle="white";
    this.ctx.lineWidth=3;
    this.ctx.beginPath();
    this.ctx.moveTo(Math.round(this.prevCoords.x), Math.round(this.prevCoords.y))
    this.ctx.lineTo(Math.round(x), Math.round(y))
    this.ctx.closePath();
    this.ctx.stroke();
    this.prevCoords = { x, y }
  }

  getMousePos(e) {
    const rect = this.canvas.current.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 1280,
      y: ((e.clientY - rect.top) / rect.height) * 720
    };
  }

  render() {
    return (
      <div className="blackboard container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-md-center">
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
