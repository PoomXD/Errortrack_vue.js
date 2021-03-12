import httpClient from "../httpClient";
import AccountService from "./account.service";
const END_POINT = "/User";

class UserService {
  async getListUser() {
    console.log('in api get list user')
    const config = {
      method: "get",
      url: `${END_POINT}/getListUser`,
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await httpClient(config);
    console.log(response.data)
    return response.data;
  }
}
export default new UserService();
