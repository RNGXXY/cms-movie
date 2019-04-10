import React,{ Component } from 'react'

class Page2Container extends Component{

    componentDidMount(){
        console.log(11,this.axios)
    }

    render(){
        return(
            <div>
                Page2Container
            </div>
        )
    }
}

export default Page2Container