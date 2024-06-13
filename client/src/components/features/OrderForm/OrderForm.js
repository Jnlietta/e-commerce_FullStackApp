import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Card, Form, Spinner } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import { createOrderRequest, getRequests } from '../../../redux/ordersRedux';
import styles from './OrderForm.module.scss';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { loadProductsRequest } from '../../../redux/productsRedux';

const OrderForm = ({ cartProducts }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const requests = useSelector(getRequests);
  
    const [priceOnlyProducts, setPriceOnlyProducts] = useState(0); 
    const [deliveryCost, setDeliveryCost] = useState(9);
    const [priceTotal, setPriceTotal] = useState(priceOnlyProducts + 9); 
  
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userAddress: '',
        delivery: 'inPost',
      });

    const deliveryOptions = useMemo(() => [
        { value: 'inPost', label: 'inPost 9$', cost: 9 },
        { value: 'delivers', label: 'Delivers 10$', cost: 10 },
        { value: 'inPostNextDay', label: 'inPost next-day-shipping 20$', cost: 20 },
        { value: 'deliversNextDay', label: 'Delivers next-day-shipping 25$', cost: 25 },
    ], []);

    const[isError, setIsError] = useState(false);

    useEffect(() => {
        let priceOfProducts = 0;
        for(let cartProduct of cartProducts) {
            const price = cartProduct.product.price * cartProduct.quantity;
            priceOfProducts += price;
            setPriceOnlyProducts(priceOfProducts);
        }

        const selectedOption = deliveryOptions.find(option => option.value === formData.delivery);
        if (selectedOption) {
            setDeliveryCost(selectedOption.cost);
            setPriceTotal(priceOnlyProducts + selectedOption.cost);
        }
    }, [cartProducts, formData.delivery, priceOnlyProducts, deliveryOptions]);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.userName && formData.userEmail && formData.userAddress) {
        await dispatch(createOrderRequest({ ...formData, priceOnlyProducts, priceTotal }));
        setIsError(false);

        // to start new order right after current one
        Cookies.remove('guestId');

        // to trigger middleware to generate new guestId immediately
        await dispatch(loadProductsRequest());
        
        navigate('/thank-you');
      } else {
        setIsError(true);
      }
    };
  
    return (
        <Card>
        <Card.Header className={styles.header}>Place Order</Card.Header>
        <Card.Body>
          <Form>
          { (isError) && <Alert color="warning">Please complete all required fields before submitting your order.</Alert> }

            <Form.Group controlId="formUserName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
                autoComplete="name" 
              />
            </Form.Group>
            <Form.Group controlId="formUserEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formUserAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="userAddress"
                value={formData.userAddress}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDelivery">
              <Form.Label>Delivery</Form.Label>
              <Form.Control
                as="select"
                name="delivery"
                value={formData.delivery}
                onChange={handleChange}
                required
              >
                {deliveryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <div className="mt-4">
              <h5>Total Summary</h5>
              <p>Subtotal: {priceOnlyProducts.toFixed(2)} $</p>
              <p>Delivery: {deliveryCost.toFixed(2)} $</p>
              <p className={styles.price}><strong>Total (VAT included): {priceTotal.toFixed(2)} $</strong></p>
            </div>
            <Button onClick={handleSubmit} type="submit" buttonName='Place Order' style={{ width: '100%', marginBottom: '20px' }}></Button>
            { (requests['CREATE_ORDER'] && requests['CREATE_ORDER'].pending) && <Spinner animation="border" variant="secondary" /> }
          </Form>
        </Card.Body>
      </Card>
    );
  };
  
  export default OrderForm;