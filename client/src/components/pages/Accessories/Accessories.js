import React from 'react';
import { useSelector } from 'react-redux';
import { getAccessoriesProducts } from '../../../redux/productsRedux';
import Products from '../../features/Products/Products';

const Accessories = props => {
    const products = useSelector(getAccessoriesProducts);

    return(
      <div>
        <h1>Only accessories:</h1>
        <Products products={products} />
      </div>
    );
};

export default Accessories;