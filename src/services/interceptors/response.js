import AccountService from ".././api/account.service";
import axios from "axios";
import router from "@/router";


export const interceptorResponse = async (response) => {
	return response
}

export const interceptorResponseError = async (error) => {
  // console.log('response error',error.response.data.message)
  // console.log('request error',error.request)
  if(error.response.status === 401 && error.response.data.message !== 'Fail.'){
    let data = await AccountService.refreshToken();
    // console.log("data", data);
    if(data.status === 200){
      error.response.config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
      return axios(error.response.config)
    }else{
      // console.log('refresh error')
      router.push({ name: "Login" });
      return error;
    }
  }else{
    return error;
  }
  
}