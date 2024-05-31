import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsRequest, getProducts } from '../../../redux/productsRedux';
import { IMAGES_URL } from '../../../config';

const Home = props => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
  
    useEffect(() => {
      dispatch(loadProductsRequest());
    }, [dispatch]);

    return(
        <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={IMAGES_URL + product.mainImage} alt={product.name} />
          <p>{product.shortDescription}</p>
          <h3>Gallery:</h3>
          <div>
            {product.gallery.map(image => (
              <img key={image.id} src={IMAGES_URL + image.url} alt={product.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
    );
};

export default Home;