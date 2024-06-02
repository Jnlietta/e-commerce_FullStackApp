import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styles from './ProductForm.module.scss';

const ProductForm = ({ product }) => {

  return (
    <div>
      <h1 className={styles.productName}>{product.name}</h1>
      <p className={styles.shortDescription}>{product.shortDescription}</p>
      <div className={styles.priceInfo}>
        <p><span>{product.price} $</span>VAT included</p>
        <p>Lowest price in the past 30 days</p>
      </div>
      <div className={styles.productControls}>
        <Form.Group controlId="size">
          <Form.Label>Size</Form.Label>
          <Form.Control as="select" style={{ width: '200px' }}>

            {(product.name === 'Baseball Cap' || product.name === 'Sunglasses') && (
              <option value="one size">One Size</option>
            )}

            {(product.name !== 'Baseball Cap' && product.name !== 'Sunglasses') && (
              <>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              </>
            )}
            
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <InputGroup>
            <Form.Control type="number" min="1" defaultValue="1" style={{ width: '200px', flex: 'none' }}/>
          </InputGroup>
        </Form.Group>
      </div>
      <div className={styles.productDescription}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductForm;