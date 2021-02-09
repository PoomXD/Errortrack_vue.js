import AccountService from "./api/account.service.js"
class checkToken{
    checkToken(){
       AccountService.refreshToken().then(res => {
           return res
       })
    }
}
export default new checkToken();