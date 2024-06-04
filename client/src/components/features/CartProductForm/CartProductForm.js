import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { IMAGES_URL } from '../../../config';
import styles from './CartProductForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const CartProductForm = ({ cartProduct, onRemoveProduct, onSubmit }) => {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const [size, setSize] = useState(cartProduct.size);
  const [comment, setComment] = useState(cartProduct.comment || '');
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [error, setError] = useState('');

  const handleQuantityChange = (event) => {
    setIsFormChanged(true);
    if (event.target.value === cartProduct.quantity) {
      setIsFormChanged(false);
    }

    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && Number.isInteger(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const handleSizeChange = (event) => {
    setIsFormChanged(true);
    if (event.target.value === cartProduct.quantity) {
      setIsFormChanged(false);
    }

    setSize(event.target.value);
  };

  const handleCommentChange = (event) => {
    setIsFormChanged(true);
    if (event.target.value === '') {
      setIsFormChanged(false);
    }

    setComment(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    setIsFormChanged(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (size === '') {
      setError('Please select a size.');
    } else {
      setError('');
      const cartProduct = {
        quantity,
        size,
        comment,
      };
      onSubmit(cartProduct);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        
        <div className={styles.cartProductHeader}>
          <h2 className={styles.cartProductName}>{cartProduct.product.name}</h2>
        </div>

        <Col xs={12} md={4} className="d-flex justify-content-center mb-3">
          <img src={IMAGES_URL + cartProduct.product.mainImage} alt='produkt' className={styles.mainImage} />
        </Col>

        <Col xs={12} md={6}>

          {isFormChanged && (
            <h5 className={styles.info}>Save your changes before you confirm the order.</h5>
          )}
          
          <Row>
            <Form.Group as={Col} controlId="size" className="mb-2">
            <Form.Label>Size</Form.Label>
            <Form.Control as="select" value={size} onChange={handleSizeChange} required>
              <option value="" disabled>Select Size</option>
              {(cartProduct === 'Baseball Cap' || cartProduct === 'Sunglasses') && (
              <option value="One Size">One Size</option>
              )}
              {(cartProduct !== 'Baseball Cap' && cartProduct !== 'Sunglasses') && (
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
            {error && <div className="text-danger">{error}</div>}
            </Form.Group>

            <Form.Group as={Col} controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control 
              type="number" 
              min="1" 
              value={quantity}
              onChange={handleQuantityChange} 
              required 
            />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="comment" className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              value={comment}
              onChange={handleCommentChange}
              maxLength={50}
            />
            </Form.Group>
          </Row>
        </Col>

        <Col xs={12} md={2} className={styles.buttonsContainer}>
        {isFormChanged && (
          <Button variant="dark" onClick={handleUpdate} className={styles.button}>
            <FontAwesomeIcon icon={faSave} className={clsx(styles.icon, styles.saveIcon)} />
          </Button>
        )}
          <Button variant="danger" onClick={() => onRemoveProduct(cartProduct.id)} className={clsx(styles.button, styles.trashButton)}>
              <FontAwesomeIcon icon={faTrash} className={clsx(styles.icon, styles.trashIcon)} />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CartProductForm;