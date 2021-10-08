import {
  Web_3_Object,
  WEB_3_CONNECTED,
  SET_META_MASK_ADDRESS,
  DELETE_META_MASK_ADDRESS,
} from "../constants";

export const setMetaMask = (content) => ({
  type: SET_META_MASK_ADDRESS,
  payload: content,
});

export const deleteMetaMask = () => ({ type: DELETE_META_MASK_ADDRESS });

export function Web3Object(value) {
  return {
    type: Web_3_Object,
    payload: value,
  };
}

export function Web3Connected(value) {
  return {
    type: WEB_3_CONNECTED,
    payload: value,
  };
}
// export default {Web3Object, web3Connected};
