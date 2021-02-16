import httpClient from "../httpClient";
import AccountService from "./account.service";

const END_POINT = "/Project";

class ProjectService {
  async addProject(param) {
    console.log("in api");
    const config = {
      method: "post",
      url: `${END_POINT}/addProject`,
      data: param,
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
        return this.addProject(param);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }
  async getListProject(userId) {
    const config = {
      method: "get",
      url: `${END_POINT}/getListProject`,
      params: {
        userId: userId,
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
        return this.getListProject(userId);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }
  async getListProjectByOwner(userId) {
    // console.log(userId);
    const config = {
      method: "get",
      url: `${END_POINT}/getListProjectByOwner`,
      params: {
        userId: userId,
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
        return this.getListProjectByOwner(userId);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }
  async getProject(projectId) {
    // console.log(projectId);
    const config = {
      method: "get",
      url: `${END_POINT}/getProject`,
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
        return this.getProject(projectId);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }
  async updateProject(param) {
    console.log("update api", param);
    const config = {
      method: "put",
      url: `${END_POINT}/updateProject`,
      data: param,
      headers: {
        "content-type": "application/json",
      },
    };
    console.log("update api", config);
    const response = await httpClient(config);
    
    if (response.status === 200) {
      return response.data;
    } else if (response.request.status === 401) {
      let data = await AccountService.refreshToken();
      console.log("data", data.status);
      if (data.status === 200) {
        return this.updateProject(param);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }
}

export default new ProjectService();
