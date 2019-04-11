import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react';

// 子组件
import Son1 from './son1'

@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class Page2Container extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'杨春晖'
        }
    }

    onHandleName=(name)=>{
        this.setState({
            name:name
        })
    }
    componentDidMount(){
        // this.props.store.userId = 567876            // mobx可直接修改store中的数据
        this.props.store.onHandleUserId(22222)      // 使用store中的方法修改store中的数据
        // console.log(11,this.props.store.userId)
    }

    render(){
        return(
            <div>
                Page2Container
                <p>{this.props.store.userId}</p>
                {/* 父组件向子组件传递数据和方法，先定义，再传递 */}
                {/* 为什么要穿方法呢，因为子组件无法直接修改props中接受到的数据，因为props中的数据是别的组件传递给他的，要改也是人家自己改 */}
                {/* 但是可以传递修改数据的方法给子组件，子组件可以触发这个方法来修改这个数据，所以还是人家自己改的，而不是子组件改的 */}
                {/* 通过props接受的数据可以同步更新到子组件身上，所以子组件不必担心数据没有更新 */}
                <Son1 name={this.state.name} onHandleName={(name)=>this.onHandleName(name)}/> 
            </div>
        )
    }
}

export default Page2Container