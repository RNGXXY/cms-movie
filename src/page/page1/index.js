import React,{ Component } from 'react'

import { Button } from 'antd'
class Page1Container extends Component{

    
    constructor(props){
        super(props)
        this.state={
            name:'page1',
            title:'xx'
        }
    }

    componentDidMount(){
        // console.log(11,this.props.location.state.title)
        this.setState({
            title:this.props.location.state.title
        })
    }

    render(){
        return(
            <div>
                Page1Container
                <p>1{this.state.name}</p>
                <p>2{this.state.title}</p>
                <p>3{this.props.location.state.title}</p>
                <Button type="dashed" onClick={()=>this.props.history.goBack()}>goBack</Button>
            </div>
        )
    }
}

export default Page1Container