import { useSelector } from 'react-redux';
import CartProductForm from '../CartProductForm/CartProductForm';
import styles from './CartProducts.module.scss';
import { ADD_TO_CART, getCartRequests } from '../../../redux/cartproductsRedux';

const CartProducts = ({ cartProducts }) => {

  const request = useSelector(state => getCartRequests(state, ADD_TO_CART));


  if (request && request.pending) return <div>Loading...</div>;
  else return (
    <section>
      {cartProducts.map(cartProduct => 
          <div key={cartProduct.id} className={styles.cartProductFormContainer} >
              <CartProductForm  cartProduct={cartProduct} />
          </div>
      )}
    </section>
  );
};

export default CartProducts;