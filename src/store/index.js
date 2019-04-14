import { observable , action } from "mobx";

// @observable xx 定义一条可被观察的数据
// @action fn（） 修改数据的方法，所依赖的数据如果是可被观察的，需要加@action
class Store {
  @observable userId = null;        // 用户id
  @observable adminLogin = false;    // 管理员登录否
  @observable usersList = [];         // 用户数据列表

  // 修改userId
  @action onHandleUserId = (id) =>{ 
    this.userId = id
  }

  add(){  // 所依赖的数据不是可被观察的则不用加@action
    let a = 1, b = 2
    return a+b
  }

  // 获取用户列表数据
  @action onGetUsersList = () => {
    return new Promise((resolve,rejected)=>{
      setTimeout(()=>{
        let arr = []
        for (let i=0;i<50;i++){
          let key = i
          let userId = parseInt(Math.random()*100000*99999)
          let userName = '狗子' + userId
          let userPhone = userId + 1000
          arr.push({key,userId,userName,userPhone})
        }
        this.usersList = arr
        resolve(this.usersList)
      },1000)
    })
  }
  
}

export default new Store()