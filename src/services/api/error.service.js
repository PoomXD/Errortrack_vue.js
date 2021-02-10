import httpClient from "../httpClient";
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
    return response.data;
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
      return response.data;
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
    return response.data;
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
    return response.data;
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
    return response.data;
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
    return response.data;
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
    return response.data;
  }
}

export default new ErrorService();
