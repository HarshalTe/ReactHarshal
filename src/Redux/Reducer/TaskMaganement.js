import * as ActionTypes from "../Types/ActionTypes";

export const Tasks = (
  state = {
    isLoading: true,
    errMess: null,
    tasks: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASKS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        tasks: action.payload,
      };

    case ActionTypes.TASKS_LOADING:
      return { 
        ...state, 
        isLoading: true, 
        errMess: null, 
        tasks: [] 
      };

    case ActionTypes.TASKS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        tasks: [],
      };

    default:
      return state;
  }
};
