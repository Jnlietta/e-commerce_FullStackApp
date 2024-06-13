import axios from 'axios';
import { API_URL } from '../config';
import strContains from '../utils/strContains';
import { createSelector } from 'reselect';
import { getSearchString } from './searchStringRedux';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getRequests = ({ products }) => products.requests;

export const getProductById = ({ products }, productId) => products.data.find(product => product.id === productId);
export const getClothesProducts = ({ products }) => products.data.filter(product => product.category === 'Clothes');
export const getAccessoriesProducts = ({ products }) => products.data.filter(product => product.category === 'Accessories');

// optimalization with reselect library to avoid unnecessary re-renders
export const getSearchedProducts = createSelector(
  [getProducts, getSearchString],
  (products, searchString) => {
      return products.filter(product =>
          strContains(product.name, searchString)
      );
  }
);

/* ACTIONS */

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');


export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* THUNKS */

export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest({ name: 'LOAD_PRODUCTS' }));
    try {

      let res = await axios.get(`${API_URL}/products`, {
        withCredentials: true
      });
      dispatch(loadProducts(res.data));
      dispatch(endRequest({ name: 'LOAD_PRODUCTS' }));

    } catch(e) {
      dispatch(errorRequest({ name: 'LOAD_PRODUCTS', error: e.message }));
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
    case LOAD_PRODUCTS: 
      return { ...statePart, data: [...action.payload] };
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