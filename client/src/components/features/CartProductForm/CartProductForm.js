import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { IMAGES_URL } from '../../../config';
import styles from './CartProductForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeFromCartRequest, updateCartProductRequest } from '../../../redux/cartproductsRedux';

const CartProductForm = ({ cartProduct }) => {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const [size, setSize] = useState(cartProduct.size);
  const [comment, setComment] = useState(cartProduct.comment || '');

  const [isUpdated, setIsUpdated] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const productName = cartProduct.product.name;

  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    setIsFormChanged(true);
    setIsUpdated(false);
    if (event.target.value === cartProduct.quantity) {
      setIsFormChanged(false);
    }

    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && Number.isInteger(value) && value > 0 && value < 10) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const handleSizeChange = (event) => {
    setIsFormChanged(true);
    setIsUpdated(false);
    if (event.target.value === cartProduct.quantity) {
      setIsFormChanged(false);
    }

    setSize(event.target.value);
  };

  const handleCommentChange = (event) => {
    setIsFormChanged(true);
    setIsUpdated(false);
    if (event.target.value === '') {
      setIsFormChanged(false);
    }

    setComment(event.target.value);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    if(quantity && size) {
      await dispatch(updateCartProductRequest(cartProduct.id, { quantity: quantity, size: size, comment: comment , productId: cartProduct.product.id}));
      setIsFormChanged(false);
      setIsUpdated(true);
    }
  };

  const removeProduct = async (id) => { 
    await dispatch(removeFromCartRequest(id));
  };

  if (!cartProduct) {
    return <div>Loading...</div>;
  }
  else return (
    <Form>
      <Row className="mb-3">
        
        <div className={styles.cartProductHeader}>
          <h2 className={styles.cartProductName}>{productName}</h2>
        </div>

        <Col xs={12} md={4} className="d-flex justify-content-center mb-3">
          <img src={IMAGES_URL + cartProduct.product.mainImage} alt='produkt' className={styles.mainImage} />
        </Col>

        <Col xs={12} md={6}>
          
          <Row>
            <Form.Group as={Col} controlId="size" className="mb-2">
            <Form.Label>Size</Form.Label>
            <Form.Control as="select" value={size} onChange={handleSizeChange} required>
              <option value="" disabled>Select Size</option>

              {(productName === 'Baseball Cap' || productName === 'Sunglasses') && (
              <option value="OneSize">One Size</option>
              )}
              {(productName !== 'Baseball Cap' && productName !== 'Sunglasses') && (
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

          {isFormChanged && (
            <Alert variant="warning" className={styles.info}>Save your changes before you confirm the order.</Alert>
          )}

          {isUpdated && (
            <Alert variant="success" className={styles.info}>Product updated successfully.</Alert>
          )}

        </Col>

        <Col xs={12} md={2} className={styles.buttonsContainer}>
          {isUpdated && (
            <FontAwesomeIcon icon={faCheck} className={clsx(styles.icon, styles.checkIcon)} />

            )}
          {isFormChanged && (
            <Button variant="dark" onClick={handleUpdate} className={styles.button}>
              <FontAwesomeIcon icon={faSave} className={clsx(styles.icon, styles.saveIcon)} />
            </Button>
          )}
          <Button variant="danger" onClick={() => removeProduct(cartProduct.id)} className={clsx(styles.button, styles.trashButton)}>
              <FontAwesomeIcon icon={faTrash} className={clsx(styles.icon, styles.trashIcon)} />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CartProductForm;