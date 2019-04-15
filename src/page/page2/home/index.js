import React, { Component } from 'react'
import { Collapse, Icon , Statistic, Row, Col, Button  } from 'antd';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Panel = Collapse.Panel;

    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
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
              <Statistic title="用户量" value={112893} />
            </Col>
            <Col span={8}>
              <Statistic title="订单量" value={112893} precision={2} />
            </Col>
            {/* <Col span={8}>
              <Statistic title="用户量" value={112893} />
            </Col> */}
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