import {
  Web_3_Object,
  WEB_3_CONNECTED,
  SET_META_MASK_ADDRESS,
  DELETE_META_MASK_ADDRESS,
} from "../constants";

const initialState = {
  web3object: {},
  metaMaskAddress: "",
  web3connected: false,
 
};

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Web_3_Object:
      return {
        ...state,
        web3object: action.payload,
      };
    case WEB_3_CONNECTED:
      return {
        ...state,
        web3connected: action.payload,
      };

    case SET_META_MASK_ADDRESS:
      // localStorage.setItem("userConnected", true);
      return {
        ...state,
        metaMaskAddress: action.payload,
      };

    case DELETE_META_MASK_ADDRESS:
      return {
        ...state,
        metaMaskAddress: "",
      };

    default:
      return state;
  }
};
export default web3Reducer;
