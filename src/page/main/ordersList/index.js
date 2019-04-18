import React,{Component } from 'react'
import { inject, observer } from 'mobx-react';
import {
  Table, Input, Button, Icon,Empty
} from 'antd';
import Highlighter from 'react-highlight-words';

@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class UsersList extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: '',
    };
  }
  
  async componentDidMount(){
    await this.props.store.onGetOrdersList()
    console.log(1111,this.props.store.orderList)
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => { this.searchInput = node; }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    // render: (text) => (
    //   <Highlighter
    //     highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //     searchWords={[this.state.searchText]}
    //     autoEscape
    //     // textToHighlight={text.toString()}
    //     textToHighlight={text}
    //   />
    // ),
  })

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      width: '8%',
      ...this.getColumnSearchProps('index'),
    },{
      title: '订单号',
      dataIndex: 'orderId',
      key: 'orderId',
      width: '10%',
      ...this.getColumnSearchProps('orderId'),
    }, {
      title: '用户Id',
      dataIndex: 'userId',
      key: 'userId',
      width: '10%',
      ...this.getColumnSearchProps('userId'),
    }, {
      title: '电影Id',
      dataIndex: 'movieId',
      key: 'movieId',
      width: '10%',
      ...this.getColumnSearchProps('movieId'),
    }, {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
      width: '10%',
      ...this.getColumnSearchProps('userName'),
    }, {
      title: '订单时间',
      dataIndex: 'orderTime',
      key: 'orderTime',
      width: '15%',
      ...this.getColumnSearchProps('orderTime'),
    },{
      title: '电影名称',
      dataIndex: 'movieName',
      key: 'movieName',
      // width: '20%',
      ...this.getColumnSearchProps('movieName'),
    },{
      title: '电影票数',
      dataIndex: 'number',
      key: 'number',
      // width: '20%',
      ...this.getColumnSearchProps('number'),
    },{
      title: '订单金额',
      dataIndex: 'money',
      key: 'money',
      // width: '20%',
      ...this.getColumnSearchProps('money'),
    }
  ];
    return this.props.store.orderList.length ? <Table rowKey="index" columns={columns} dataSource={this.props.store.orderList} /> : <Empty/>;
    // return <Empty/>;
  }
}

export default UsersList