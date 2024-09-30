import { baseApi, PREFIX_RETX_PATH } from './constant';
import { IBanner } from '@type/banner';

export const BANNER_API = {
  urlGetBanners: `${PREFIX_RETX_PATH}/banner`,
};

export default class bannerApi {
  static getBanners = () => baseApi<IBanner[]>({ url: BANNER_API.urlGetBanners, method: 'GET' });
}
