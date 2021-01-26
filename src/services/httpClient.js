import axios from "axios";
// import { TokenService , TOKEN_STRING } from './storage.service';
import { interceptorRequest, interceptorRequestError } from './interceptors/request'
import { interceptorResponse, interceptorResponseError } from './interceptors/response'

const headers = {
  // 'Access-Control-Allow-Origin': '*',
  "api-version": null
};

const httpClient = axios.create({
  baseURL: 'www.domain.com',// process.env.VUE_APP_BASE_API,
  headers: headers
})

httpClient.interceptors.request.use(interceptorRequest, interceptorRequestError)
httpClient.interceptors.response.use(
  interceptorResponse,
  interceptorResponseError
);

export default httpClient;
