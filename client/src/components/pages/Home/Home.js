import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsRequest, getProducts } from '../../../redux/productsRedux';
import Products from '../../features/Products/Products';

const Home = props => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
  
    useEffect(() => {
      dispatch(loadProductsRequest());
    }, [dispatch]);

    return(
      <div>
        <Products products={products} />
      </div>
    );
};

export default Home;