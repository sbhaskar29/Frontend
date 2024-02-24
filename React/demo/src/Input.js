import React, { Component } from 'react'
import axios from 'axios'

export default class input extends Component {
  state = {
    firstname: "",
    username: "",
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick = () => {
    axios.post("https://reqres.in/api/users",{
      name:this.state.firstname,email:this.state.username
    })
    .then((res)=>{
      console.log(res.data)
    })


    /*fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({ name: this.state.firstname, email: this.state.username })
    })
      .then((res) => {
        return res.json()
      })
      .then((updatedRes) => {
        console.log(updatedRes)
      })
    this.setState({
      firstname: "", username: ""
    })*/

  }
  render() {
    return (
      <div>
        <h1>name is: {this.state.firstname} username:{this.state.username}</h1>
        <p>
          <input
            value={this.state.firstname}
            name='firstname'
            onChange={this.handleChange}
            placeholder='Enter your name' />
        </p>
        <p>
          <input
            value={this.state.username}
            name='username'
            onChange={this.handleChange}
            placeholder='Enter username' />
        </p>
        <button onClick={this.handleClick}>Submit</button>

      </div>
    )
  }
}
