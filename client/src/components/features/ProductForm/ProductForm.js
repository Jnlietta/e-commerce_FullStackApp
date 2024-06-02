import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styles from './ProductForm.module.scss';

const ProductForm = ({ product }) => {

  return (
    <div className={styles.productControls}>
      <Form.Group controlId="size">
        <Form.Label>Size</Form.Label>
        <Form.Control as="select" style={{ width: '100%' }}>

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
          <Form.Control type="number" min="1" defaultValue="1" />
        </InputGroup>
      </Form.Group>
    </div>
  );
};

export default ProductForm;