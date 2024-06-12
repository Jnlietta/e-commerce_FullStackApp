import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCartProductsRequest } from './redux/cartproductsRedux';
import { loadProductsRequest } from './redux/productsRedux';

// import routes
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import Order from './components/pages/Order/Order';
import ThankYouPage from './components/pages/ThankYouPage/ThankYouPage';
import Clothes from './components/pages/Clothes/Clothes';
import Accessories from './components/pages/Accessories/Accessories';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
    dispatch(loadCartProductsRequest())
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;