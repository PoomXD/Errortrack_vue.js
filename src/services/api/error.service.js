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
}

export default new ErrorService();
