import React,{Component } from 'react'
import { inject, observer } from 'mobx-react';
import {
  Table, Input, Button, Icon,Empty,Popconfirm
} from 'antd';
import Highlighter from 'react-highlight-words';

@inject('store')        // 向该组件中注入store中的数据和方法
@observer               // 订阅store中数据的变化
class SeatsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: '',
    };
  }

  componentDidMount(){
    this.props.store.onGetSeat()
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
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text ? text.toString():""}
      />
    ),
  })

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  handleDelete = async (record) => {
    let { key ,movieId , sceneId} = record
    let resData = await this.axios({
      url:'/cms/seat/releaseSeat',
      method:'DELETE',
      data:{
        movieId,
        sceneId
      }
    })
    if(resData.status == 200 ){
      this.props.store.seatList = this.props.store.seatList.filter(item => item.movieId !== movieId && item.sceneId !== sceneId)
    }
    // const dataSource = [...this.props.store.seatList];
    // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  columns = [{
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    width: '8%',
    ...this.getColumnSearchProps('index'),
  },{
    title: '电影ID',
    dataIndex: 'movieId',
    key: 'movieId',
    width: '20%',
    ...this.getColumnSearchProps('movieId'),
  },{
    title: '影厅ID',
    dataIndex: 'sceneId',
    key: 'sceneId',
    width: '20%',
    ...this.getColumnSearchProps('sceneId'),
  }, {
    title: '电影名称',
    dataIndex: 'movieName',
    key: 'movieName',
    width: '20%',
    ...this.getColumnSearchProps('movieName'),
  },{
    title: '已占座位',
    dataIndex: 'movieSeat',
    key: 'movieSeat',
    // width: '20%',
    ...this.getColumnSearchProps('movieSeat'),
  },{
    title: '操作',
    dataIndex: 'operation',
    render: (text, record) => (
      this.props.store.seatList.length >= 1
        ? (
          <Popconfirm title="确定释放当前座位" onConfirm={() => this.handleDelete(record)}>
            <a href="javascript:;">清场</a>
          </Popconfirm>
        ) : null
    ),
  },];
  render() {
    
    return this.props.store.seatList.length > 0 ? <Table  rowKey="index"  columns={this.columns} dataSource={this.props.store.seatList} /> : <Empty/>;
  }
}


export default SeatsList