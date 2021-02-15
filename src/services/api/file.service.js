import httpClient from "../httpClient";
const END_POINT = "/File";

class FileService{
    async addFile(formData) {
        const config = {
          method: "post",
          url: `${END_POINT}/addFiles`,
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
        return response.data;
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
        return response.data;
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
        return response.data;
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
        return response.data;
      }
}

export default new FileService();