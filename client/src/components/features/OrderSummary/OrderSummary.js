import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import { IMAGES_URL } from '../../../config';

const OrderSummary = ({ cartProducts }) => {
    
  return (
    <Card>
      <Card.Header>Order Summary</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
            {cartProducts.map(cartProduct => (
                <ListGroup.Item key={cartProduct.id}>
                    <Row className="mb-3">
                        <Col xs={4}>
                        <img src={IMAGES_URL +cartProduct.product.mainImage} alt={cartProduct.product.name} style={{ width: '100%' }} />
                        </Col>
                        <Col xs={8}>
                        <h5>{cartProduct.product.name}</h5>
                        <p>Size: {cartProduct.size}</p>
                        <p>Quantity: {cartProduct.quantity}</p>
                        {cartProduct.comment && <p>Comment: {cartProduct.comment}</p>}
                        <p><strong>Price: {cartProduct.product.price.toFixed(2)} zł</strong></p>
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