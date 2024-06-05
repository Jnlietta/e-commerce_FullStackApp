import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import { IMAGES_URL } from '../../../config';
import styles from './OrderSummary.module.scss';
import clsx from 'clsx';

const OrderSummary = ({ cartProducts }) => {
    
  return (
    <Card>
      <Card.Header>Order Summary</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
            {cartProducts.map(cartProduct => (
                <ListGroup.Item key={cartProduct.id} className={styles.listGroup}>
                    <Row className={clsx(styles.cartFlex)}>
                        <Col xs={4}>
                        <img src={IMAGES_URL +cartProduct.product.mainImage} alt={cartProduct.product.name} style={{ width: '100%' }} className={styles.image}/>
                        </Col>
                        <Col xs={8}>
                        <h5 className={styles.productName}>{cartProduct.product.name}</h5>
                        <p>Size: {cartProduct.size}</p>
                        <p>Quantity: {cartProduct.quantity}</p>
                        {cartProduct.comment && <p>Comment: {cartProduct.comment}</p>}
                        <p className={styles.price}><strong>Price: {cartProduct.product.price.toFixed(2)} zł</strong></p>
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;