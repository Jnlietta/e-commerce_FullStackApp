import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styles from './ProductForm.module.scss';

const ProductForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10); 
    if (!isNaN(value) && Number.isInteger(value) && value > 0) {
      // Check if the parsed value is a valid integer
      setQuantity(value); // Set quantity state to the parsed value
    } else {
      setQuantity(1); // Set quantity state to default value if input is not a valid integer
    }
  };

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
        
          <Form.Control 
          type="number" 
          min="1" 
          defaultValue="1" 
          value={quantity}
          onChange={handleQuantityChange}
          />

        </InputGroup>
      </Form.Group>
    </div>
  );
};

export default ProductForm;