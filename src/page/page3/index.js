import React,{ Component } from 'react'
import { Tabs, Button } from 'antd';
import { inject, observer } from 'mobx-react';

// 子组件
import Home from './home'
import OutFriend from './outFriend'
import TravelNotes from './travelNotes'

const TabPane = Tabs.TabPane;

@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class Page3Container extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }


    componentDidMount(){
    }


    // 页签右边添加附加操作。
    renderSign=()=>(
        <div>
            {
                this.props.store.userLogin ? (
                    <div>
                        <Button onClick={()=>this.props.history.push('./personal')}>个人信息</Button>
                        <Button type="danger" onClick={()=>this.props.store.userLogin = false}>退出登录</Button>
                    </div>
                ) 
                : (
                    <Button onClick={()=>this.props.history.push('./sign')}>登录/注册</Button>
                )
            }
        </div>
    )
        
    render(){
        return(
            <div>
                <Tabs tabBarExtraContent={this.renderSign()}>
                    <TabPane tab="首页" key="1">{<Home/>}</TabPane>
                    <TabPane tab="出行交友" key="2">{<OutFriend/>}</TabPane>
                    <TabPane tab="旅行游记" key="3">{<TravelNotes/>}</TabPane>
                </Tabs>,
            </div>
        )
    }
}

export default Page3Container