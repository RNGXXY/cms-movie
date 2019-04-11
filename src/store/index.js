import { observable , action } from "mobx";

// @observable xx 定义一条可被观察的数据
// @action fn（） 修改数据的方法，所依赖的数据如果是可被观察的，需要加@action
class Store {
  @observable userId = null;        // 用户id
  @observable userLogin = false;    // 用户登录否

  // 修改userId
  @action onHandleUserId = (id) =>{
    this.userId = id
  }

  add(){  // 所依赖的数据不是可被观察的则不用加@action
    let a = 1, b = 2
    return a+b
  }
  
}

export default new Store()