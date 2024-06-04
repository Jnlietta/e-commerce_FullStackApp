import { getCartProducts} from "../../../redux/cartproductsRedux";
import Button from "../../common/Button/Button";
import CartProducts from "../../features/CartProducts/CartProducts";
import { useSelector } from "react-redux";

const Cart = props => {
    const cartProducts = useSelector(getCartProducts);

    return(
        <div>
            <CartProducts cartProducts={cartProducts} />
            <Button 
                path="/order"
                buttonName="Confirm order" 
                style={{ margin: '20px 0'}} 
            />
        </div>    
    );
};

export default Cart;