import { SET_TOKEN_STATS, DELETE_TOKEN_STATS } from "../constants";

export const setTokenStats = (content) => ({
  type: SET_TOKEN_STATS,
  payload: content,
});

export const deleteTokenStats = () => ({ type: DELETE_TOKEN_STATS });
