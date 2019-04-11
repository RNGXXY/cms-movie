import React,{ Component } from 'react'
import {withRouter} from 'react-router-dom'   
// antd组件
import { Button } from 'antd';

class Son1 extends Component{
    constructor(props){
      super(props)
      // console.log(this.props)
    }

    onClick=(pageName,state={})=>{
      this.props.history.push(pageName,state)
    }

    render(){
        return(
            <div>
              son1
              <Button type="primary" onClick={()=>this.onClick('./page1',{title:'杨春晖'})}>ToPage1</Button>
              <Button onClick={()=>this.onClick('./page2')}>ToPage2</Button>
              <Button type="dashed" onClick={()=>this.onClick('./page3')}>ToPage3</Button>
              <Button type="danger" onClick={()=>this.onClick('./page4')}>ToPage4</Button>
            </div>
        )
    }
}

export default withRouter(Son1)

// 只有路由组件身上有路由相关属性和方法，其子组件和非路由组件没有路由相关属性和方法
// 如需要这些需要引入高阶组件withRouter，包裹着Component外，这样路由相关属性和方法会写入this.props中
// 使用方法,eg:this.props.history.go();this.props.location.pathname