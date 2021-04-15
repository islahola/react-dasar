import React, { Component } from 'react'
import List from './List'

export default class Props extends Component {
    state ={
        skill : "front end developoer"
    }
    render() {
        return (
            <div>
              <List nama="islah khofifah" semester="semester 4" mySkill={this.state.skill}/>
            </div>
        )
    }
}
