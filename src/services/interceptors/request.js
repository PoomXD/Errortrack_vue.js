import authHeader from '../auth-header';

export const interceptorRequest = (request) => {
  // set header token
    const auth = authHeader();
    if(auth && auth.Authorization){
      request.headers['Authorization'] = auth.Authorization;
    }
  return request
}

export const interceptorRequestError = (error) => {
  console.log('request error')
  return Promise.reject(error)
}
