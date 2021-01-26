import httpClient from '../httpClient'

const END_POINT = 'Example'

class ExampleService{
  async examGet() {
    const config = {
      method: 'get',
      url: `${END_POINT}/Example`,
      params : {
        aaa:1,
        "bbb": null,
        "ccc": "testtest"
      }
    }

    const response = await httpClient(config);
    return response.data;
  }

  async examPost(param){
    const config = {
      method: 'post',
      url: `${END_POINT}/Example`,
      data : param,
      headers:{
      }
    }

    const response = await httpClient(config);
    return response.data;
  }

  async examPut(param){
    const config = {
      method: 'put',
      url: `${END_POINT}/Example`,
      data : param,
      headers:{
      }
    }

    const response = await httpClient(config);
    return response.data;
  }

  async examDelete(param){
    const config = {
      method: 'post',
      url: `${END_POINT}/ExampleDelete`,
      data : param,
      headers:{
      }
    }

    const response = await httpClient(config);
    return response.data;
  }
  
}

export default new TestService();

