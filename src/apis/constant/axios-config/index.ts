import axios, { Method } from 'axios';
import cookie from 'react-cookies';

import { IResponseError } from '@type/response';

const axiosInstance = axios.create({
  baseURL: process.env.ENDPOINT,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = cookie.load('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token expiration and refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    if (error.response && error.response.status === 401 && !config._retry) {
      config._retry = true;
      // Retry the original request
      return axiosInstance(config);
    }

    return Promise.reject(error);
  }
);

const ErrorResponse = (e): IResponseError => {
  return { ...e.response?.data, statusCode: e.response?.status };
};

interface IPramsRequest {
  url: string;
  method: Method;
  headers?;
  data?;
  params?;
}

export async function baseApi<T>({
  url,
  method,
  headers,
  data,
  params,
}: IPramsRequest): Promise<T> {
  return new Promise((resolve, reject) => {
    let lang = localStorage.getItem('locate');
    if (!lang) lang = 'vi';
    axiosInstance({
      url: url,
      method,
      headers: {
        Authorization: `Bearer ${cookie.load('access_token')}`,
        'x-user-id': cookie.load('user_id') || '',
        'Accept-language': lang,
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
        ...headers,
      },
      params,
      data,
    })
      .then(({ data }: { data: T }) => {
        resolve(data);
      })
      .catch((e) => reject(ErrorResponse(e)));
  });
}
