import { AppThunk } from '@store/index';
import { sliceActions } from '@store/location/location.slice';
import { locateApi } from '@apis/index';

export const getLocations = (): AppThunk => async (dispatch) => {
  let dataLocation;
  dataLocation = localStorage.getItem('data_location_version_1');

  if (!dataLocation) {
    locateApi.getLocations().then((response) => {
      dataLocation = response.data;
      dispatch(sliceActions.getLocations(dataLocation));
      localStorage.setItem('data_location_version_1', JSON.stringify(dataLocation));
    });
  } else {
    dataLocation = JSON.parse(dataLocation);
    dispatch(sliceActions.getLocations(dataLocation));
  }
};

export const switchLocate = sliceActions.switchLocate;
