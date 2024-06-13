import { Alert } from "react-bootstrap";
import { getCartProducts} from "../../../redux/cartproductsRedux";
import Button from "../../common/Button/Button";
import CartProducts from "../../features/CartProducts/CartProducts";
import { useSelector } from "react-redux";

const Cart = props => {
    const cartProducts = useSelector(getCartProducts);

    if(cartProducts.length === 0) return (
        <div>
            <Alert variant="info"> Your cart is empty, please add some products to cart. </Alert>
            <Button 
                path="/"
                buttonName="Go back to shop"
            />
        </div>
    );

    return(
        <div>
            <CartProducts cartProducts={cartProducts} />
            <Button 
                path="/order"
                buttonName="Confirm order" 
                style={{ margin: '20px 20px 20px 0'}} 
            />
            <Button
                path="/"
                buttonName="Continue shopping"
            />
        </div>    
    );
};

export default Cart;