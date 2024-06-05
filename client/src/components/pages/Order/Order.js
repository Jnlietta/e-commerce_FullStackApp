import { useSelector } from 'react-redux';
import { getCartProducts } from '../../../redux/cartproductsRedux';
import { Col, Row } from "react-bootstrap";
import OrderForm from "../../features/OrderForm/OrderForm";
import OrderSummary from "../../features/OrderSummary/OrderSummary";

const Order = props => {
    const cartProducts = useSelector(getCartProducts);

    return(
        <Row>
            <Col xs={12} md={8}>
                <OrderSummary cartProducts={cartProducts}/>
            </Col>
            <Col md={4}>
                <OrderForm cartProducts={cartProducts}/>
            </Col>
        </Row>
    );
};

export default Order;