import React from 'react';
import { useSelector } from 'react-redux';
import { getSearchedProducts } from '../../../redux/productsRedux';
import Products from '../../features/Products/Products';
import SearchForm from '../../features/SearchForm/SearchForm';
import { getSearchString } from '../../../redux/searchStringRedux';

const Home = props => {
    const searchString = useSelector(getSearchString);
    const products = useSelector(state => getSearchedProducts(state, searchString));

    return(
      <div>
        <SearchForm />
        <Products products={products} />
      </div>
    );
};

export default Home;