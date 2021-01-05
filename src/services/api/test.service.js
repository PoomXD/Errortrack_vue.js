import httpClient from '../httpClient'

// const baseURL = process.env.VUE_APP_BASE_API;
const END_POINT = 'Account'

class TestService{
  async testGet() {
    const config = {
      method: 'get',
      url: `${END_POINT}/TestGet`,
      params : {
        aaa:1,
        "bbb": null,
        "ccc": "testtest"
      }
    }

    const response = await httpClient(config);
    return response.data;
  }

  async testGetAuth(){
    const config = {
      method: 'get',
      url: `${END_POINT}/TestGetAuth`
    }

    const response = await httpClient(config);
    return response.data;
  }

  async testKioskMachine22(param){
    const config = {
      method: 'post',
      url: `KioskMachine/Nack22`,
      data : param,
      headers:{
        // 'Content-Type' : 'multipart/form-data'
      }
    }

    const response = await httpClient(config);
    return response.data;
  }

  async testKioskMachine11(param){
    const config = {
      method: 'post',
      url: `KioskMachine/Nack11`,
      data : param,
      headers:{
        // 'Content-Type' : 'multipart/form-data'
      }
    }

    const response = await httpClient(config);
    return response.data;
  }
}

export default new TestService();

