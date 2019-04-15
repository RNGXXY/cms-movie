import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react';
import { Tabs, Icon , PageHeader , Button } from 'antd';

// 子组件
import HomeContainer from './home'
import UsersList from './usersList'
import OrdersList from './ordersList'
import SeatsList from './seatsList'

const TabPane = Tabs.TabPane;


@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class Page2Container extends Component{
    constructor(props){
        super(props)
        this.state={
            a : []
        }
    }

    async componentDidMount(){
        let a = await this.props.store.onGetUsersList()
        this.setState({
            a:a
        })
    }

    render(){
        return(
            <div>
                <PageHeader
                    title={this.state. a.length ? this.state. a[0].userName : '狗子'}
                    subTitle="狗子的后台管理系统"
                    extra={[
                        <Button key="1" type="primary">
                          退出登录
                        </Button>,
                    ]}
                    style={{
                        borderBottom:'1px solid gray'
                    }}
                />
                 <Tabs
                    ref={el=>this.tabs=el}
                    tabPosition='left'
                    defaultActiveKey="1">
                <TabPane tab={<span><Icon type="home" />首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</span>} key="1">
                    <HomeContainer />
                </TabPane>
                <TabPane tab={<span><Icon type="user" />用户管理</span>} key="2">
                    <UsersList usersList={this.props.store.usersList}/>
                </TabPane>
                <TabPane tab={<span><Icon type="ordered-list" />订单管理</span>} key="3">
                    <OrdersList usersList={this.props.store.usersList}/>
                </TabPane>
                <TabPane tab={<span><Icon type="bar-chart" />座位管理</span>} key="4">
                    <SeatsList seatsList={[]}/>
                </TabPane> 
            </Tabs>
            </div>
           
        )
    }
}

export default Page2Container