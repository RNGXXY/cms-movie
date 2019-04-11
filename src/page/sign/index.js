import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react';


@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class SignContainer extends Component{
  constructor(props){
    super(props)
  }
    componentDidMount(){
      this.props.store.userLogin = true
    }
    render(){
        return(
            <div>
                SignContainer
            </div>
        )
    }
}

export default SignContainer