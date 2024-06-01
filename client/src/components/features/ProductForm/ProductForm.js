import React from 'react';
import ProductGallery from '../ProductGallery/ProductGallery';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import styles from './ProductForm.module.scss';



const ProductForm = ({ product }) => {

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
<Container className={styles.productContainer}>
      <Row>
        <Col xs={12} sm={6} className={styles.productImages}>
          <ProductGallery product={product} />
        </Col>
        <Col md={6} className={styles.productInfo}>
          <h1>{product.name}</h1>
          <p>{product.shortDescription}</p>
          <div className={styles.productControls}>
            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Control as="select">
                <option value="one size">One Size</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <InputGroup>
                <Form.Control type="number" min="1" defaultValue="1" />
              </InputGroup>
            </Form.Group>
          </div>
          <div className={styles.productDescription}>
            <p>{product.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;