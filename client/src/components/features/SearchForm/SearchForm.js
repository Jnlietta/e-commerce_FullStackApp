import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../../redux/searchStringRedux';
import styles from './SearchForm.module.scss';

const SearchForm = ({ searchString }) => {
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(updateSearchString(e.target.value));
    };

    return (
        <Form className={styles.form}>
            <Form.Control
                type="text"
                value={searchString}
                onChange={handleChange}
                placeholder="Search for products..."
                className={styles.input}
            />
        </Form>
    );
};

export default React.memo(SearchForm);