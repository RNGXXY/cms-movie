import React,{ Component } from 'react'

// 样式组件
import { Son3Wrapper } from './styledComponents'

class Son3 extends Component{

    render(){
        return(
            <Son3Wrapper>
              <a>son3</a>
              <p className='littleSon'>11111</p>
              <span>222222</span>
            </Son3Wrapper>
        )
    }
}

export default Son3
