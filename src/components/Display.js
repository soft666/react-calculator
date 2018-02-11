import React, { Component } from 'react'
import { Input } from 'antd'

class Display extends Component {

    render() {
        return (
            <div style={{padding: '2px', marginBottom: '10px'}}>
                <Input style={{fontSize: '30px', height: '75px', textAlign: 'right'}} value={this.props.values}/>
            </div>
        )
    }
}

export default Display
