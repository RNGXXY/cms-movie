import React from 'react';
import ReactDOM from 'react-dom';
import { Route , Redirect , Switch } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import '@Assets/styleSheet/resetCss.css'    // 处理元素样式默认padding值与margin值
import '@Util/axios'                        // 添加axios，用于请求数据请求

// 子组件
import MainContainer from '@Page/main/index'
import Page1Container from '@Page/page1/index'
import Page2Container from '@Page/page2/index'
import FalsePage from '@Page/404/index'             // 404界面

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route path='/page1' component={Page1Container}/>
                <Route path='/page2' component={Page2Container}/>
                <Route path='/main' component={MainContainer}/>
                <Route path='/' exact render={()=>{  return <Redirect to='/main' /> }}/>
                <Route path='/404' component={FalsePage}/>
                <Route exact render={()=>{  return <Redirect to='/404' /> }}/>
            </Switch>
        </App>
    </BrowserRouter>   
, document.getElementById('root'));

serviceWorker.unregister();
