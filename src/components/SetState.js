import React, { Component } from 'react'

export default class SetState extends Component {
    state={
        greet : `Selamat datang`
    }
    onChange = () =>{
        this.setState({
            greet:" enjoy gais wish u all the best"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.greet}</h1>
                <button onClick={this.onChange}>Klik here</button>
            </div>
        )
    }
}
