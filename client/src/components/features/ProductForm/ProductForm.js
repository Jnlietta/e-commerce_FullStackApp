import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import styles from './ProductForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartRequest, loadCartProductsRequest } from '../../../redux/cartproductsRedux';


const ProductForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(
    product.name === 'Baseball Cap' || product.name === 'Sunglasses' ? 'OneSize' : 'XS'
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10); 
    if (!isNaN(value) && Number.isInteger(value) && value > 0 && value < 10) {
      // Check if the parsed value is a valid integer > 0
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cartProduct = {
      productId: product.id,
      quantity,
      size,
    };

    await dispatch(addToCartRequest(cartProduct));
    await dispatch(loadCartProductsRequest());

    navigate('/cart');
  };

  return (
    <Form onSubmit={handleSubmit}>

      <div className={styles.productControls}>
        <Form.Group controlId="size">
          <Form.Label>Size</Form.Label>
          <Form.Control as="select" value={size} onChange={handleSizeChange} style={{ width: '100%' }} >

            {(product.name === 'Baseball Cap' || product.name === 'Sunglasses') && (
              <option value="OneSize">One Size</option>
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
              value={quantity}
              onChange={handleQuantityChange}
            />

          </InputGroup>
        </Form.Group>
      </div>

      <Button 
        type="submit" 
        onClick={handleSubmit} 
        buttonName="Add to cart" 
        style={{ width: '100%' }} 
      />

    </Form>

  );
};

export default ProductForm;