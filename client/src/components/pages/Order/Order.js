import { useSelector } from 'react-redux';
import { getCartProducts } from '../../../redux/cartproductsRedux';
import { Col, Row } from "react-bootstrap";
import OrderForm from "../../features/OrderForm/OrderForm";
import OrderSummary from "../../features/OrderSummary/OrderSummary";

const Order = props => {
    const cartProducts = useSelector(getCartProducts);

    return(
        <Row>
            <Col xs={12} md={6} lg={7} xl={8} className="mb-3">
                <OrderSummary cartProducts={cartProducts}/>
            </Col>
            <Col md={6} lg={5} xl={4}>
                <OrderForm cartProducts={cartProducts}/>
            </Col>
        </Row>
    );
};

export default Order;