import React from 'react';
import { useSelector } from 'react-redux';
import { getClothesProducts } from '../../../redux/productsRedux';
import Products from '../../features/Products/Products';

const Clothes = props => {
    const products = useSelector(getClothesProducts);

    return(
      <div>
        <h1>Only clothes:</h1>
        <Products products={products} />
      </div>
    );
};

export default Clothes;