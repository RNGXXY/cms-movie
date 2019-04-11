import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react';


@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class PersonalContainer extends Component{
  constructor(props){
    super(props)
  }
    componentDidMount(){
    }
    render(){
        return(
            <div>
                PersonalContainer
            </div>
        )
    }
}

export default PersonalContainer