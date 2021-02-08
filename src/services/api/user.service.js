import httpClient from "../httpClient";
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
        return response.data;
      }
}
export default new UserService();