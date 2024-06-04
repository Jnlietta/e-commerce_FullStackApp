import Button from "../../common/Button/Button";
import CartForm from "../../features/CartProductForm/CartProductForm";

const Cart = props => {
    return(
        <div>
            <CartForm />
            <Button 
                path="/order"
                buttonName="Create order" 
                style={{ margin: '20px 0'}} 
            />
        </div>    
    );
};

export default Cart;