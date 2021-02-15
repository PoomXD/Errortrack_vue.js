import axios from "axios";
// import { TokenService , TOKEN_STRING } from './storage.service';
import { interceptorRequest, interceptorRequestError } from './interceptors/request'
import { interceptorResponse, interceptorResponseError } from './interceptors/response'

const headers = {
  // 'Access-Control-Allow-Origin': '*',
  "api-version": null,
  "header-version" : '1.0.0',
  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
};

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: headers
})

httpClient.interceptors.request.use(interceptorRequest, interceptorRequestError)
httpClient.interceptors.response.use(
  interceptorResponse,
  interceptorResponseError
);

export default httpClient;
