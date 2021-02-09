import httpClient from "../httpClient";
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
    return response.data;
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
      return response.data;
  }
}

export default new ServiceService();
