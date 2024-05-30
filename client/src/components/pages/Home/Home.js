import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsRequest, getProducts } from '../../../redux/productsRedux';

const Home = props => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
  
    useEffect(() => {
      dispatch(loadProductsRequest());
    }, [dispatch]);

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;