import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getCartProducts = ({ cart }) => cart.data;
export const getCartRequests = ({ cart }) => cart.requests;

/* ACTIONS */

// action name creator
const reducerName = 'cartproducts';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const ADD_TO_CART = createActionName('ADD_TO_CART');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addToCart = payload => ({ payload, type: ADD_TO_CART });


/* THUNKS */
export const addToCartRequest = (cartProduct) => {
  return async dispatch => {
    dispatch(startRequest({ name: 'ADD_TO_CART' }));
    try {
      let res = await axios.post(`${API_URL}/cartproducts`, cartProduct);
      dispatch(addToCart(res.data));
      dispatch(endRequest({ name: 'ADD_TO_CART' }));
    } catch(e) {
      dispatch(errorRequest({ name: 'ADD_TO_CART', error: e.message }));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  requests: {},
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...statePart, data: [...statePart.data, action.payload] };
    case START_REQUEST:
      return { ...statePart, requests: {...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false }} };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true }} };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false }} };
    default:
      return statePart;
  }
}