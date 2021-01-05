import httpClient from '../httpClient'
import { TokenService } from '../storage.service';
import * as _utils from '../utils.service';

const END_POINT = 'Account'

class AccountService{
  async login(user) {

    const params = {
      UserName : user.username,
      Password: user.password
    };

    // const data = _utils.request.objToFormData(params);
    // const json = JSON.stringify(params);

    const config = {
      method: 'post',
      url: `${END_POINT}/Login`,
      data : params,
      headers:{
        'content-type' : 'application/json'
      }
    }

    const response = await httpClient(config);
    console.log('login():response', response);
    let _return;

    if(response.resStatusCode===200){
      _return = {
        data : {...response.data},
        status : response.resStatusCode
      };

      if (response && response.data) {
        // const { accessToken, refreshToken } = response.data;

        // if(accessToken && refreshToken){
        //   TokenService.saveToken(accessToken);
        //   TokenService.saveRefreshToken(refreshToken);
        // }
      }

    }
    else{
      _return = {
        data : {...response.data.data},
        status : response.status
      };
    }

    return _return;

  }

  async logout() {
    const params = {
      refreshToken : TokenService.getRefreshToken()
    };

    const config = {
      method: 'post',
      url: `${END_POINT}/Logout`,
      data: params,
      headers: {
        'content-type' : 'application/json'
      }
    }

    const response = await httpClient(config);

    // if (response && response.resStatusCode === 200) {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
    // }

    return response;
  }

  async refreshToken(){
    const config = {
      method: 'post',
      url: `${END_POINT}/RefreshToken`,
      data: {
        refreshToken : TokenService.getRefreshToken()
      },
      headers: {
        Authorization : null
      }
    }
    const response = await httpClient(config);

    if (response && response.data && response.resStatusCode === 200) {
      const { accessToken, refreshToken } = response.data;
      if(accessToken && refreshToken){
        TokenService.saveToken(accessToken);
        TokenService.saveRefreshToken(refreshToken);
      }
    }

    return response.data;
  }

  async changepassword(param){

    const data = {
      UserId: param.userId,
      CurrentPassword: param.currentpassword,
      NewPassword: param.password
    }

    const config = {
      method: 'put',
      url: `${END_POINT}/ChangePassword`,
      data: data
    }

    const response = await httpClient(config);

    console.log('res:changepassword', response);

    if (response && response.data && response.resStatusCode === 200) {
      const { status } = response.data;
      if(status === true){
        return true;
      }
    }
    return false;
  }

}

export default new AccountService();

