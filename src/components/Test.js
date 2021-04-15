import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        nama : "nama anda",
        text : ""
    }
    change = e =>{
        this.setState({
            text : e.target.value 
        })
    }
    click = () =>{
        this.setState({
            nama : this.state.text
        })
        this.setState({
            text :""
        })
    }
    render() {
        return (
            <div>
               <h1>{this.state.nama}</h1> 
               <input type="text" value={this.state.text} onChange={this.change}></input>
               <button onClick={this.click}> Click me</button>
            </div>
        )
    }
}
