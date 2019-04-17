import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { Collapse, Icon , Statistic, Row, Col, Button  } from 'antd';

@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      userListLength:0,
      orderListLength:0,
      seats:0
    }
  }

  async componentDidMount(){
    await this.props.store.onGetUsersList()
    await this.props.store.onGetOrdersList()
    await this.props.store.onGetSeat()
    let userListLength = this.props.store.usersList.length
    let orderListLength = this.props.store.orderList.length
    let seats = this.props.store.seatList.length
    this.setState({
      userListLength:userListLength,
      orderListLength:orderListLength,
      seats:seats
    })
  }

  render() {
    const Panel = Collapse.Panel;

    const text = `
      狗子的管理系统
    `;

    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden',
    }
    return (
      <div>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Panel header="数据统计" key="1" style={customPanelStyle}>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="用户量" value={this.state.userListLength} />
            </Col>
            <Col span={8}>
              <Statistic title="订单量" value={this.state.orderListLength} />
            </Col>
            <Col span={8}>
              <Statistic title="定座数" value={this.state.seats} />
            </Col>
          </Row>
          </Panel>
          <Panel header="系统信息" key="2" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          {/* <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
            <p>{text}</p>
          </Panel> */}
        </Collapse>
      </div>
    )
  }
}

export default HomeContainer