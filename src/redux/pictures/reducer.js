import {ActionType} from './action-types';
import {DEFAULT_CATEGORY} from '../../constants';

const initialState = {
  pics: [],
  activeCategory: DEFAULT_CATEGORY,
  isLoading: false,
  isLoadingCompleted: false
};

export const picsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_PICS:
      return {
        ...state,
        pics: action.payload
      };

    case ActionType.CHANGE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload
      };

    case ActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case ActionType.SET_IS_LOADING_COMPLETED:
      return {
        ...state,
        isLoadingCompleted: action.payload
      };

    default:
      return state;
  }
};
