import { baseApi, PREFIX_RETX_PATH } from './constant';
import { ILocation } from '@type/locations';
import { IResponseData } from '@type/response';

export const LOCATION_API = {
  urlGetLocations: `${PREFIX_RETX_PATH}/locations`,
};

export default class locateApi {
  static getLocations = () =>
    baseApi<IResponseData<ILocation>>({ url: LOCATION_API.urlGetLocations, method: 'GET' });
}
