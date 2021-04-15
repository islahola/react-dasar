import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.nama}</h2>
                <h3>{this.props.semester}</h3>
                <h3>{this.props.mySkill}</h3>
                <ListItem/>
            </div>
        )
    }
}
