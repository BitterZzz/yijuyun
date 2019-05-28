import api from '../../ajax/api'
import request from '../../ajax/request'

const state ={

};

const mutations ={

};

const actions ={
  async getClassifyAction(context){
      let result = await request.post(api.CLASSIFY_INFO_API)
      console.log(result)
  }

};

export default{
    namespaced:true,
    state,
    mutations,
    actions
}