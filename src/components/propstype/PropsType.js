import React, { Component } from 'react'
import PropsTypes from 'prop-types'

export class PropsType extends Component {
    render() {
        return (
            <div>
                <button>Clik Me</button>
            </div>
        )
    }
}
PropsType.PropsTypes={
    color : PropsTypes.string.isRequired
}
PropsType.defaultProps={
    color:"merah"
}
export default PropsType
