import React, { Component } from 'react';
import { Button, Card, Input } from 'antd';
import PanelButton from './components/PanelButton'
import Display from './components/Display'
import calculator from './lib/Cal'
import './App.css'

class App extends Component {

  state = {
    ButtonNumber: '',
    NumberDisplay: ''
  }

  callPanelButton = val => {

    this.setState(calculator(this.state ,val))

  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Card style={{ width: 400, margin: 'auto' }}>
            <Display values={this.state.NumberDisplay}></Display>
            <PanelButton callValueApp={this.callPanelButton}></PanelButton>
        </Card>
      </div>
    );
  }
}

export default App;
