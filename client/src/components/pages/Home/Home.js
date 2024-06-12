import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux';
import Products from '../../features/Products/Products';
import SearchForm from '../../features/SearchForm/SearchForm';

const Home = props => {
    const products = useSelector(getProducts);

    return(
      <div>
        <SearchForm />
        <Products products={products} />
      </div>
    );
};

export default Home;