import React, { Component } from 'react'

export default class State extends Component {
    state = {
        // ini untuk objek
        // profile : {
        //     nama : "islah khofifah nuraini",
        //     umur : "umur saya 21 tahun"
        // }

        // ini untuk array state
        books : ["Intejelensi Embun Pagi", "Dee Lestari"]
       
    }
    render() {
        return (
           <div>
               <h1>Contoh sederhana dari state</h1>
               {this.state.books.map(item =>
                <div><h3>{item}</h3></div>
                )}
           </div>
        )
    }
}
