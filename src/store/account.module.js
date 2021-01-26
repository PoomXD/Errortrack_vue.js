import AccountService from "@/services/api/account.service";
import { TokenService } from "@/services/storage.service";

const user = {
  accessToken  : null,
  refreshToken : null
};

const detail = {
  userId : '',
  fullName : '',
  airportId : '',
  airportName : ''
}

const initialState = {
  isCenter : false,
  detail : {...detail},
  userId : '',
  user : {...user},
  permissionMenu : []
}

const actions = {
  login({ commit }, data) {
    return AccountService.login(data).then(
      res => {
        console.log('login:res',res);
        const user = {
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken
        }

        commit("loginSuccess", user);
        return Promise.resolve(res);
      },
      error => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },
  logout({ commit }) {
    return AccountService.logout().then(
      res => {
        commit("logoutSuccess");
        return Promise.resolve(res);
      },
      error => {
        commit("logoutFailure");
        return Promise.reject(error);
      }
    );
  },
  refresh({ commit }) {
    return AccountService.refreshToken().then(
      res => {
        commit("loginSuccess", res);
        return Promise.resolve(res);
      },
      error => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },
  changepassword({commit},data){
    return AccountService.changepassword(data).then(
      res => {
        // commit("loginSuccess", res);
        return Promise.resolve(res);
      },
      error => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  }
};

const mutations = {
  loginSuccess(state, user) {
    state.user = user;
    // state.status.loggedIn = true;
    // state.user = user;
  },
  loginFailure(state) {
    state.user = {}
    // state.status.loggedIn = false;
    // state.user = null;
  },
  logoutSuccess(state) {
    state.user = {};
    state.detail = {};
    state.isCenter = false;
    state.userId = '';
    state.permissionMenu = [];
    // state.status.loggedIn = false;
    // state.user = null;
  },
  logoutFailure(state, user) {
    // state.status.loggedIn = false;
    // state.user = null;
    state.user = {};
    state.detail = {};
    state.isCenter = false;
    state.userId = '';
    state.permissionMenu = [];
  },
  saveLocalToken(state){
    if(state.user && state.user.accessToken && state.user.refreshToken){
      TokenService.saveToken(state.user.accessToken);
      TokenService.saveRefreshToken(state.user.refreshToken);
    }
    else{
      TokenService.removeToken();
      TokenService.removeRefreshToken();
    }
  }
};

export const account = {
  namespaced: true,
  state: initialState,
  actions,
  mutations
};
