import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import products from './productsRedux';
import cartproducts from './cartproductsRedux';
import orders from './ordersRedux';
import searchString from './searchStringRedux';

// combine reducers
const rootReducer = combineReducers({
    products,
    cartproducts,
    orders,
    searchString,
});

const store = createStore(
  rootReducer,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;