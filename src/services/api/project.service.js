import httpClient from '../httpClient'
const END_POINT = '/Project'

class ProjectService{
    async addProject(param){
        console.log("in api")
        const config = {
          method: 'post',
          url: `${END_POINT}/addProject`,
          data : param,
          headers:{
            'content-type' : 'application/json'
          }
        }
    
        const response = await httpClient(config);
        return response.data;
      }
}

export default new ProjectService();