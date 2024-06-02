import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { IMAGES_URL } from '../../../config';
import styles from './CartForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartForm = ({ cartProduct, onRemoveProduct, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('cartProduct.size[0]');
  const [comment, setComment] = useState('Max 50 plus podpiąć wartości bazowe pod quantity i size z propsów zamiast hardcodować w useState');
  const [error, setError] = useState('');

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && Number.isInteger(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
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
    <div className={styles.cartFormContainer}>

        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
            
            <div className={styles.cartProductHeader}>
                <h2 className={styles.cartProductName}>Nazwa produktu</h2>
            </div>

            <Col xs={12} md={4} className="d-flex justify-content-center mb-3">
                <img src={IMAGES_URL + 'uploads/leatherJacket-main.jpg'} alt='produkt' className={styles.mainImage} />
            </Col>

            <Col xs={12} md={6}>
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
                    />
                    </Form.Group>
                </Row>
            </Col>

            <Col xs={12} md={2}>
                <Button variant="link" onClick={() => onRemoveProduct(cartProduct.id)} className={styles.trashButton}>
                    <FontAwesomeIcon icon={faTrash} className={styles.icon} />
                </Button>
            </Col>
        </Row>
        </Form>

    </div>
  );
};

export default CartForm;