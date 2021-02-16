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
    if (response.status === 200) {
      return response.data;
    } else if (response.request.status === 401) {
      let data = await AccountService.refreshToken();
      console.log("data", data.status);
      if (data.status === 200) {
        return this.getListErrorStatus(serviceId);
      }else{
        location.replace('http://localhost:8080/login')
      }
    }
  }
}

export default new ErrorStatusService();
