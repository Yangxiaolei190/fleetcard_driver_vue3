/*
 * @Author: Yongon
 * @LastEditors: yanglei m.justin.yang@outlook.com
 * @Description: axios
 */
import axios from 'axios';
// import { CT } from '@/config/index';
import { Toast } from 'vant';

// axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['area-code'] = 'CWHT'
// 创建 axios 实例
const request = axios.create({
  // timeout: CT.timeout // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    const data = error.response.data;
    Toast(data.message);
  }
  return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
  // 自定义全局header
  config.headers = config.headers ? config.headers : {};
  config.headers['Content-Type'] = 'application/json';
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response) => {
  return response;
}, errorHandler);

export default request;
