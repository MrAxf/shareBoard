import React, { Component } from 'react'
import { CompactPicker } from 'react-color'
import Slider from 'react-rangeslider'

import { setBrush } from '../../providers/Brushprovider'

import './sidenav.scss'

export default class Sidenav extends Component {

  state = {
    color: "#fff",
    size: 3
  }

  handleChangeColor(color) {
    this.setState({ color: color.hex })
    setBrush(this.state.size, color.hex)
  }

  handleChangeSize(value) {
    this.setState({ size: value })
    setBrush(value, this.state.color)
  }

  render() {
    return (
      <div className={`sidenav${this.props.open ? '' : ' closed'} `}>
        <ul className="list-group list-group-flush py-5">
          <li className="list-group-item">
            <h3>Brush options</h3>
          </li>
          <li className="list-group-item">
            <strong>Size: </strong>{this.state.size}px
          </li>
          <li className="list-group-item">
            <Slider
              min={1}
              max={100}
              value={this.state.size}
              onChange={this.handleChangeSize.bind(this)}
            />
          </li>
          <li className="list-group-item">
            <strong>Color:</strong><div style={{display: "inline-block", width: "1rem", paddingTop: "1rem", marginLeft: "1rem", marginBottom: "-3px", background: this.state.color}}></div>
          </li>
          <li className="list-group-item">
            <CompactPicker
              color={this.state.color}
              onChangeComplete={this.handleChangeColor.bind(this)}
            />
          </li>
        </ul>
      </div>
    )
  }
}
