import {loadPics, setIsLoading, setIsLoadingCompleted} from './actions-creator';
import {ApiRoutes} from '../../constants';
import {dataToPicsListAdapter} from './adapters';

export const fetchPicsList = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.PHOTOS)
    .then(({data}) => {
      dispatch(setIsLoading(true));
      dispatch(loadPics(dataToPicsListAdapter(data)));
    })
    .catch(() => {})
    .finally(() => {
      setTimeout(() => {
        dispatch(setIsLoading(false));
        dispatch(setIsLoadingCompleted(true));
      }, 500)
    })
};
