import { ADD_CLASSNAME } from "./classActions";

const initialState = {
  className: "page"
};

/**
 * Reducer to modify state
 * @params {object} state - default state, {object} action - Action specified
 * @returns {object} modified state
 */

function classReducer(state = initialState, action) {

  // console.log(action);

  if (action.type === ADD_CLASSNAME) {
    return  {
               ...state,
               className: action.payload
            }
  }


  return state;
}

export default classReducer;
