import React, { Component } from 'react'

// function toggleOffCanvas() {
//     document.getElementById("navicon").classList.toggle("open")
//     document.getElementById("site").classList.toggle("open")
// }

export default class Navicon extends Component {
    render() {
      return (
        <div className="navicon" id="navicon" onClick={this.props.toggleOffCanvas}>
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
      )
    }
  }
