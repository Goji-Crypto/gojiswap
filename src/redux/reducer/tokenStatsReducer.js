import {
    SET_TOKEN_STATS,
    DELETE_TOKEN_STATS,
  } from "../constants";
  
  const initialState = {
    tokenStats: []
  };
  
  const tokenStatsReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case SET_TOKEN_STATS:
        return {
          ...state,
          tokenStats: [...action.payload],
        };
  
      case DELETE_TOKEN_STATS:
        return {
          ...state,
          tokenStats: [],
        };
  
      default:
        return state;
    }
  };
  export default tokenStatsReducer;
  