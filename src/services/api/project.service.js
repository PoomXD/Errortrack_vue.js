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
}

export default new ProjectService();
