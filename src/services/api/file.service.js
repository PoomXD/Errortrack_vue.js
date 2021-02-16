import httpClient from "../httpClient";
import AccountService from "./account.service";
const END_POINT = "/File";

class FileService{
    async addFile(formData) {
      console.log(formData)
        const config = {
          method: "post",
          url: `${END_POINT}/addFilesList`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: function (progressEvent) {
            console.log(
              "total : ",
              parseInt(
                Math.round((progressEvent.loaded / progressEvent.total))
              )
            );
            // percent.value = parseInt(
            //   Math.round((progressEvent.loaded / progressEvent.total) * 100)
            // );
          }.bind(this),
        };
    
        const response = await httpClient(config);

        if (response.status === 200) {
          return response.data;
        } else if (response.request.status === 401) {
          let data = await AccountService.refreshToken();
          console.log("data", data.status);
          if (data.status === 200) {
            return this.addFile(formData);
          }else{
            location.replace('http://localhost:8080/login')
          }
        }
      }
      async getListFile(errorId) {
        // console.log(userId);
        const config = {
          method: "get",
          url: `${END_POINT}/getFiles`,
          params: {
            errorId: errorId,
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
            return this.getListFile(errorId);
          }else{
            location.replace('http://localhost:8080/login')
          }
        }
      }
      async renameFile(param) {
        const config = {
          method: "put",
          url: `${END_POINT}/rename`,
          data: param,
          headers: {
            "content-type": "application/json",
          },
        };
        const response = await httpClient(config);
        // console.log(response.data)
        if (response.status === 200) {
          return response.data;
        } else if (response.request.status === 401) {
          let data = await AccountService.refreshToken();
          console.log("data", data.status);
          if (data.status === 200) {
            return this.renameFile(param);
          }else{
            location.replace('http://localhost:8080/login')
          }
        }
      }
      async deleteFile(param) {
        const config = {
          method: "put",
          url: `${END_POINT}/delete`,
          data: param,
          headers: {
            "content-type": "application/json",
          },
        };
        const response = await httpClient(config);
        // console.log(response.data)
        if (response.status === 200) {
          return response.data;
        } else if (response.request.status === 401) {
          let data = await AccountService.refreshToken();
          console.log("data", data.status);
          if (data.status === 200) {
            return this.deleteFile(param);
          }else{
            location.replace('http://localhost:8080/login')
          }
        }
      }
}

export default new FileService();