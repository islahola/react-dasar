import React, { Component } from 'react'

export default class FormHandling extends Component {
    state={
        nama : "ini adalah nama universitas",
        text : ""
    }
    click = () => {
        this.setState({
            nama : this.state.text
        })
        this.setState({
            text : ""
        })
    }

    change = e =>{
        this.setState({
            text : e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.nama}</h1>
                <input type="text" value={this.state.text} onChange={this.change}></input>
                <button onClick={this.click} >Konfrim</button>
            </div>
        )
    }
}
