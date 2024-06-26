import ProductInfo from "../../features/ProductInfo/ProductInfo";
import ProductGallery from "../../features/ProductGallery/ProductGallery";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsRedux';
import { Col, Container, Row } from "react-bootstrap";
import styles from './Product.module.scss';

const Product = props => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector(state => getProductById(state, id));

  if (!product) {
    navigate('/'); 
    }
  
  return (
    <Container className={styles.productContainer}>
      <Row>
        <Col xs={12} sm={6} className={styles.productImages}>
          <ProductGallery product={product} />
        </Col>
        <Col md={6} className={styles.productInfo}>
          <ProductInfo product={product} />
        </Col>
      </Row>
    </Container>
  );
};

export default Product;