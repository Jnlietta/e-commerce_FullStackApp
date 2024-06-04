import { useEffect } from "react";
import { getCartProducts, loadCartProductsRequest } from "../../../redux/cartproductsRedux";
import Button from "../../common/Button/Button";
import CartProducts from "../../features/CartProducts/CartProducts";
import { useDispatch, useSelector } from "react-redux";

const Cart = props => {

    const dispatch = useDispatch();
    const cartProducts = useSelector(getCartProducts)
    // const request = useSelector(getRequest);
  
    useEffect(() => {
      dispatch(loadCartProductsRequest())
    }, [dispatch]);

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