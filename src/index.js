import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Switch } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'
import store from '@Store/index.js';
import 'antd/dist/antd.min.css';            // antd组件库样式，先引antd.min.css，再引resetCss.css，因为 antd.min.css对一些标签的样式做了修改
import '@Assets/styleSheet/resetCss.css'    // 处理元素样式默认padding值与margin值
import '@Util/axios'                        // 添加axios，用于请求数据请求

// 子组件
import MainContainer from '@Page/main/index'
import SignContainer from '@Page/sign/index'
import FalsePage from '@Page/404/index'             // 404界面

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/main' component={MainContainer} />
                    <Route path='/sign' component={SignContainer} />
                    <Route path='/' exact render={() => <Redirect to='/main' />} />
                    <Route path='/404' component={FalsePage} />
                    <Route exact render={() => { return <Redirect to='/404' /> }} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

serviceWorker.unregister();
