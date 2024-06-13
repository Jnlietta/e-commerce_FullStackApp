import React from 'react';
import styles from './ProductInfo.module.scss';
import ProductForm from '../ProductForm/ProductForm';

const ProductInfo = ({ product }) => {

  return (
    <div>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.shortDescription}>{product.shortDescription}</p>
        <div className={styles.priceInfo}>
            <p><span>{product.price} $</span>VAT included</p>
            <p>Lowest price in the past 30 days</p>
        </div>

        <ProductForm product={product}  />

        <div className={styles.productDescription}>
            <p>{product.description}</p>
            <p>{product.descriptionSecondPart}</p>
        </div>
    </div>
  );
};

export default ProductInfo;