import { observable, action } from "mobx";
import axios from 'axios'
import { onHandleTime } from '../util'

// @observable xx 定义一条可被观察的数据
// @action fn（） 修改数据的方法，所依赖的数据如果是可被观察的，需要加@action
class Store {
  @observable usersList = [];         // 用户数据列表
  @observable orderList = [];         // 订单数据列表
  @observable seatList = [];         // 座位数据
  @observable collectionList = [];         // 收藏数据
  @observable adminLogin = false;    // 管理员登录否
  @observable adminName = '';         // 用户名
  @observable remember = false;         // 是否记住登录信息（名，密码）

  add() {  // 所依赖的数据不是可被观察的则不用加@action
    let a = 1, b = 2
    return a + b
  }

  // 获取用户列表数据
  @action onGetUsersList = async () => {
    let resData = await axios('cms/userList/dataList')
    if (resData.data.code == 200) {
      resData.data.data.userList.forEach((item,index) => {
        item.index = String(index+1)
      });
      this.usersList = resData.data.data.userList
    }
  }

  // 获取订单数据列表
  @action onGetOrdersList = async () => {
    let resData = await axios('cms/orderList/dataList')
    if (resData.data.code == 200) {
      resData.data.data.orderList.forEach((item,index) => {
        item.index = String(index+1)
        item.orderTime = onHandleTime(Number(item.orderTime))
      });
      this.orderList = resData.data.data.orderList
    }
  }

  // 获取座位数据
  @action onGetSeat = async (id) => {
    let resData = await axios('cms/seat/getAllSeat')
    if (resData.data.code == 200) {
      resData.data.data.forEach((item,index) => {
        let movieSeat = []
        item.newMovieSeat =  item.movieSeat
        item.index = String(index+1)
        item.movieSeat.forEach(item=>{
          let key = Object.keys(item)[0]
          let value = item[key]
          let seatValue = `${key}-${value}`
          movieSeat.push(seatValue)
        })
        item.movieSeat = movieSeat.join(',')
      });
      this.seatList = resData.data.data
    }
  }

    // 获取收藏数据列表
    @action onGetCollectionList = async () => {
      let resData = await axios('cms/collectionList/dataList')
      if (resData.data.code == 200) {
        resData.data.data.forEach((item,index) => {
          item.index = String(index+1)
          item.orderTime = onHandleTime(Number(item.timeStamp))
        });
        this.collectionList = resData.data.data
      }
    }
}

export default new Store()