import React, { Component } from 'react'

export default class StateExample extends Component {
    state={
        name:"JS",
        year:2015,
        employees:[
            {name:"ram",gender:"male"},
            {name:"siva",gender:"male"},
            {name:"teja",gender:"male"},
            
        ]
    }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Name is:{this.state.name}</h1>
        {
            this.state.employees.map((emp)=>(
                
                <div>
                    <p>{emp.name}</p>
                    <p>{emp.gender}</p>
                </div>
            ))
        }
      </div>
    )
  }
}
