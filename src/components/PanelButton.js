import React, { Component } from 'react'
import ButtonCalu from './ButtonCalu'
import { Row, Col } from 'antd/lib/grid';

class PanelButton extends Component {
    
    callButton = (val) => {
        this.props.callValueApp(val)
    }

    render() {
        let { callPanelButton } = this.props
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <ButtonCalu name={'AC'} color={'danger'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'del'} color={'danger'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'+/-'} color={'danger'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'÷'} color={'danger'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <ButtonCalu name={'7'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'8'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'9'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'x'} color={'danger'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <ButtonCalu name={'4'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'5'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'6'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'-'} color={'danger'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <ButtonCalu name={'1'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'2'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'3'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'+'} color={'danger'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <ButtonCalu name={'0'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'.'} color={'primary'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                    <Col span={6}>
                        <ButtonCalu name={'='} color={'danger'} callValue={this.callButton}></ButtonCalu>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PanelButton