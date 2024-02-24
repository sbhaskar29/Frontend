import React, { Component } from 'react'
import './App.css'

export default class ChildComponent extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="student-details">
        <p><b>Name:</b>{this.props.studentname}</p>
        <p><b>Grade:</b>{this.props.studentclass}</p>
        <p><b>Age:</b>{this.props.studentage}</p>
        
      </div>
    )
  }
}
