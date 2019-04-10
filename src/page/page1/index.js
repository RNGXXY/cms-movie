import React,{ Component } from 'react'

class Page1Container extends Component{

    componentDidMount(){
        console.log(11,this.axios)
    }

    render(){
        return(
            <div>
                Page1Container
            </div>
        )
    }
}

export default Page1Container