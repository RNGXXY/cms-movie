import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './index.css'

@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class SignContainer extends Component{
  constructor(props){
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='signContainer' 
        style={{
          width:window.innerWidth,
          height:window.innerHeight,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'bottom left',
          backgroundImage: "url('https://img.ivsky.com/img/bizhi/pre/201811/06/jackson-006.jpg')"}}>
        <Form onSubmit={this.handleSubmit} className="login-form formContainer">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </Form.Item>
          <Form.Item className='someTask'> 
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <br/>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(SignContainer);

export default WrappedNormalLoginForm