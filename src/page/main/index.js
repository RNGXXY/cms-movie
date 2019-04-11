import React,{ Component } from 'react'


//子组件 
import Son1 from './son1'
import Son2 from './son2'
import Son3 from './son3'
class MainContainer extends Component{
    constructor(props){
        super(props)
        // console.log(this.props)
    }
    render(){
        return(
            <div>
                <Son1>

                </Son1>
                <Son2/>
                <Son3/>
            </div>
        )
    }
}

export default MainContainer