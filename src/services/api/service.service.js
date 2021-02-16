import httpClient from "../httpClient";
import AccountService from "./account.service";
const END_POINT = "/Service";

class ServiceService {
  async getListService(projectId) {
    // console.log(userId);
    const config = {
      method: "get",
      url: `${END_POINT}/getListService`,
      params: {
        projectId: projectId,
      },
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await httpClient(config);
    
    if (response.status === 200) {
      return response.data;
    } else if (response.request.status === 401) {
      let data = await AccountService.refreshToken();
      console.log("data", data.status);
      if (data.status === 200) {
        return this.getListService(projectId);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }

  async getService(serviceId) {
    const config = {
        method: "get",
        url: `${END_POINT}/getService`,
        params: {
            serviceId: serviceId,
        },
        headers: {
          "content-type": "application/json",
        },
      };
      const response = await httpClient(config);

      if (response.status === 200) {
        return response.data;
      } else if (response.request.status === 401) {
        let data = await AccountService.refreshToken();
        console.log("data", data.status);
        if (data.status === 200) {
          return this.getService(serviceId);
        }else{
          location.replace('http://localhost:8080/login')
        }
      }
  }
}

export default new ServiceService();
