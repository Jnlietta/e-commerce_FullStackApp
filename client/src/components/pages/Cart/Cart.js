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
            <h1>Your cart summary:</h1>
            <CartProducts cartProducts={cartProducts} />
            <div style={{ textAlign: 'center', margin: '30px'}}>
                <Button 
                    path="/order"
                    buttonName="Confirm order" 
                    style={{ margin: '10px'}} 
                />
                <Button
                    path="/"
                    buttonName="Continue shopping"
                    style={{ margin: '10px'}} 
                />
            </div>
        </div>    
    );
};

export default Cart;