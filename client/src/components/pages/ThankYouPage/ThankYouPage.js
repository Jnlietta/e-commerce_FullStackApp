import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import styles from './ThankYouPage.module.scss';

const ThankYouPage = () => {
    return (
        <Card className='d-flex justify-content-center align-items-center'>
            <Card.Body>
                <h1 className={styles.header}>Thank You for Your Order!</h1>
                <Alert variant="success" className={styles.alert}>Your order has been successfully created.</Alert>
                <div className="d-flex justify-content-center">
                    <Button path="/" buttonName="Back to Home" style={{ width: '50%' }} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default ThankYouPage;