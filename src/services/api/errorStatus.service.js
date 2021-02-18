import httpClient from "../httpClient";
import AccountService from "./account.service";
const END_POINT = "/ErrorStatus";

class ErrorStatusService {
  async getListErrorStatus(serviceId) {
    // console.log(userId);
    const config = {
      method: "get",
      url: `${END_POINT}/getListErrorStatus`,
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

export default new ErrorStatusService();
