import UserService from '@/services/api/user.service';

const state = {
    users:[]
};
const actions = {
  getUser({ commit }) {
    return UserService.getListUser().then(
        res => {
            // console.log("get list user", res);
            commit("setUser", res);
            return Promise.resolve(res);
        }
    )
  },
};
const mutations = {
  setUser(state, list) {
    state.users = list;
    console.log(state.users);
  },
};

export default{
    namespaced: true,
    state,
    actions,
    mutations
  };