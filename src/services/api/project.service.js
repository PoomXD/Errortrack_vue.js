import httpClient from "../httpClient";
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
    return response.data;
  }
  async getListProject(userId) {
    // console.log(userId);
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
    return response.data;
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
    // console.log(response.data)
    return response.data;
  }
  async updateProject(param) {
    console.log("update api",param);
    const config = {
      method: "put",
      url: `${END_POINT}/updateProject`,
      data: param,
      headers: {
        "content-type": "application/json",
      },
    };console.log("update api",config);
    const response = await httpClient(config);
    // console.log(response.data)
    return response.data;
  }
}

export default new ProjectService();
