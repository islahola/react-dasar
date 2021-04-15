import React, { Component } from 'react'

export default class Event extends Component {
    change = () =>{
        alert("Tombol diklick");
    }
    render() {
        return (
            <div>
                <button onClick={this.change}>Klik disini</button>
            </div>
        )
    }
}
