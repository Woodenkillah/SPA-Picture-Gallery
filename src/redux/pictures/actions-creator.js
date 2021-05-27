import {ActionType} from './action-types';

export const loadPics = pics => ({
  type: ActionType.LOAD_PICS,
  payload: pics
});

export const changeCategory = category => ({
  type: ActionType.CHANGE_CATEGORY,
  payload: category
});

export const setIsLoading = status => ({
  type: ActionType.SET_IS_LOADING,
  payload: status
});

export const setIsLoadingCompleted = status => ({
  type: ActionType.SET_IS_LOADING_COMPLETED,
  payload: status
});
