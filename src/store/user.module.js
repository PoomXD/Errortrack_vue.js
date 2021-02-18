import UserService from '@/services/api/user.service';

const state = {
    users:[]
};
const actions = {
  getUser({ commit }) {
    return UserService.getListUser().then(
        res => {
        
            commit("setUser", res);
            return Promise.resolve(res);
        }
    )
  },
};
const mutations = {
  setUser(state, list) {
    list.forEach(data => {
      if(data.lastName == null){
        data.lastName = ''
      }
    });
    state.users = list;

  },
};

export default{
    namespaced: true,
    state,
    actions,
    mutations
  };