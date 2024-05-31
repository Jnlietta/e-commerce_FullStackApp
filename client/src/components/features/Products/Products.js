import styles from "./Products.module.scss";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IMAGES_URL } from '../../../config';


const Products = ({products}) => {
    return (
        <div>
            <Row xs={1} sm={2} md={3} lg={4}>
            {products.map(product=>(
                <Col key={product.id} className="mb-2 d-flex justify-content-center">
                    <Card style={{ width: '100%', maxWidth: '320px'}} className={styles.card}>
                        <Card.Img variant="top" src={IMAGES_URL + product.mainImage} alt={product.name} className={styles.image} />
                        <Card.Body>
                            <Card.Title className={styles.title}>{product.name}</Card.Title>
                            <Card.Text>
                                <span className="mb-0">{product.shortDescription}</span>
                                <br />
                                <div className={styles.text}>
                                    <span className="mb-0">from <strong>{product.price} $</strong></span>

                                    <Button variant="primary" as={NavLink} to={"/product/" + product.id} className={styles.button}>Explore</Button>
                                </div>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    );
};

export default Products;