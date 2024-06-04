import CartProductForm from '../CartProductForm/CartProductForm';
import styles from './CartProducts.module.scss';

const CartProducts = ({ cartProducts }) => {
  return (
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