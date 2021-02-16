import httpClient from "../httpClient";
import AccountService from "./account.service";
const END_POINT = "/User";

class UserService {
    async getListUser() {
        const config = {
          method: "get",
          url: `${END_POINT}/getListUser`,
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
            return this.getListUser();
          }else{
            location.replace('http://localhost:8080/login')
          }
        }
      }
}
export default new UserService();