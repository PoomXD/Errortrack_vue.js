import httpClient from "../httpClient";
import AccountService from "./account.service";
const END_POINT = "/Error";

class ErrorService {
  async getListError(serviceId) {
    // console.log(userId);
    const config = {
      method: "get",
      url: `${END_POINT}/getListErrorByServiceId`,
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
        return this.getListError(serviceId);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }

  async getErrorById(errorId){
    const config = {
        method: "get",
        url: `${END_POINT}/getError`,
        params: {
            errorId: errorId,
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
          return this.getErrorById(errorId);
        }else{
          location.replace('http://localhost:8080/login')
        }
      }
  }
  async updateUsersAndErrorStatus(param) {
    console.log("update users");
    const config = {
      method: "put",
      url: `${END_POINT}/updateUserAndErrorStatus`,
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
        return this.updateUsersAndErrorStatus(param);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }
  async addNewComment(param) {
    console.log("update Comment");
    const config = {
      method: "put",
      url: `${END_POINT}/addComment`,
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
        return this.addNewComment(param);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }

  async getComment(errorId){
    const config = {
      method: "get",
      url: `${END_POINT}/getComment`,
      params: {
        errorId: errorId,
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
        return this.getComment(errorId);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }

  async editComment(param) {
    console.log("update Comment");
    const config = {
      method: "put",
      url: `${END_POINT}/updateComment`,
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
        return this.editComment(param);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }

  async deleteComment(param) {
    console.log("update Comment");
    const config = {
      method: "put",
      url: `${END_POINT}/deleteComment`,
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
        return this.deleteComment(param);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }
}

export default new ErrorService();
