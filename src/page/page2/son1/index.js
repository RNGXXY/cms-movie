import React,{ Component } from 'react'
import { Button } from 'antd'
class Son1 extends Component{
    constructor(props){
      super(props)
    }
    render(){
        return(
            <div>
              son1 {this.props.name}
              <Button type="dashed" onClick={()=>this.props.onHandleName('火龙果')}> {this.props.name} </Button>
            </div>
        )
    }
}

export default Son1