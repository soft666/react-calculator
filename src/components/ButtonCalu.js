import React, { Component } from 'react'
import { Button } from 'antd'

class ButtonCalu extends Component {

    render() {
        let { name, color, callValue } = this.props
        return (
            <div>
                <Button type={color} style={{ height: '50px'}} onClick={ () => callValue(name) } ghost>{name}</Button>
            </div>
        )
    }
}

export default ButtonCalu
