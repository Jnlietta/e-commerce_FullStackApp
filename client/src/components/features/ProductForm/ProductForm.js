import React from 'react';
import { IMAGES_URL } from '../../../config';
import styles from './ProductForm.module.scss';



const ProductForm = ( { product }) => {

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImages}>
        <img src={IMAGES_URL + product.mainImage} alt={product.name} className={styles.mainImage} />
        <div className={styles.galleryImages}>
          {product.gallery.map((image, index) => (
            <img src={IMAGES_URL+ image.url} alt={`Gallery ${index + 1}`} key={index} className={styles.galleryImages} />
          ))}
        </div>
      </div>
      <div className={styles.productInfo}>
        <h1>{product.name}</h1>
        <p>{product.shortDescription}</p>
        <div className={styles.productControls}>
          <select name="size" id="size">
            
              <option value='one size'>OneSIZE</option>
            
          </select>
          <input type="number" name="quantity" id="quantity" min="1" defaultValue="1" />
        </div>
        <div className={styles.productDescription}>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;