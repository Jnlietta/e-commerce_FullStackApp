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

const LOAD_CART_PRODUCTS = createActionName('LOAD_CART_PRODUCTS');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const UPDATE_CART_PRODUCT = createActionName('UPDATE_CART_PRODUCT');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadCartProducts = payload => ({ payload, type: LOAD_CART_PRODUCTS });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const updateCartProduct = payload => ({ payload, type: UPDATE_CART_PRODUCT });


/* THUNKS */

export const loadCartProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest({ name: 'LOAD_CART_PRODUCTS' }));
    try {

      let res = await axios.get(`${API_URL}/cartproducts`, {
        withCredentials: true
      });
      dispatch(loadCartProducts(res.data));
      dispatch(endRequest({ name: 'LOAD_CART_PRODUCTS' }));

    } catch(e) {
      dispatch(errorRequest({ name: 'LOAD_CART_PRODUCTS', error: e.message }));
    }

  };
};

export const addToCartRequest = (cartProduct) => {
  return async dispatch => {
    dispatch(startRequest({ name: 'ADD_TO_CART' }));
    try {
      let res = await axios.post(`${API_URL}/cartproducts`, cartProduct, {
        withCredentials: true
      });
      dispatch(addToCart(res.data));
      dispatch(endRequest({ name: 'ADD_TO_CART' }));
    } catch(e) {
      dispatch(errorRequest({ name: 'ADD_TO_CART', error: e.message }));
    }
  };
};

export const updateCartProductRequest = (id, updatedData) => {
  return async dispatch => {
    dispatch(startRequest({ name: 'UPDATE_CART_PRODUCT' }));
    try {
      let res = await axios.put(`${API_URL}/cartproducts/${id}`, updatedData, {
        withCredentials: true
      });
      dispatch(updateCartProduct(res.data));
      dispatch(endRequest({ name: 'UPDATE_CART_PRODUCT' }));
    } catch (e) {
      dispatch(errorRequest({ name: 'UPDATE_CART_PRODUCT', error: e.message }));
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
    case LOAD_CART_PRODUCTS: 
      return { ...statePart, data: [...action.payload] };
    case ADD_TO_CART:
      return { ...statePart, data: [...statePart.data, action.payload] };
    case UPDATE_CART_PRODUCT:
      return { ...statePart, data: statePart.data.map(cartProduct => cartProduct.id === action.payload.id ? action.payload : cartProduct) };
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