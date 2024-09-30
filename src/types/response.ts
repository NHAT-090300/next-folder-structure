export interface IResponse<T> {
  message: string;
  errors: {
    [key: string]: string[];
  };
  data: T;
  token: {
    accessToken: string;
    expiresTn: number;
  };
  pagination: {
    limit: number;
    page: number;
    totalPage: number;
  };
}

export interface IResponseData<T> {
  message: string;
  errors: {
    [key: string]: string[];
  };
  data: T;
}

export interface IResponseError {
  id: string;
  message: string;
  statusCode: number;
}
