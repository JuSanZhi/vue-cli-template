import axios from 'axios';

const service = axios.create({
  baseURL: '/',
  timeout: 40000,
  withCredentials: false,
})

// 设置请求拦截器
service.interceptors.request.use((req: any) => {
  //根据blue内容动态设置baseurl
  return req
}, function (error: any) {
  return Promise.reject(error);
})

// 设置响应拦截器
service.interceptors.response.use((res: any) => {
  return res.data;
}, function (error: any) {
  return Promise.reject(error);
})

export default service;