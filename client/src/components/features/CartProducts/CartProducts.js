import CartProductForm from '../CartProductForm/CartProductForm';

const CartProducts = ({ cartProducts }) => (
  <section>
    {cartProducts.map(cartProduct => <CartProductForm key={cartProduct._id} {...cartProduct} />)}
  </section>
)

export default CartProducts;