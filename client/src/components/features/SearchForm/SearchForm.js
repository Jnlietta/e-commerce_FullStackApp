import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchStringVisibility, updateSearchString } from '../../../redux/searchStringRedux';
import styles from './SearchForm.module.scss';

const SearchForm = ({ searchString }) => {
    const dispatch = useDispatch();
    const visible = useSelector(getSearchStringVisibility);

    const handleChange = e => {
        dispatch(updateSearchString(e.target.value));
    };

    return (
        <Form className={visible ? styles.form : styles.hidden}>
            <Form.Control
                type="text"
                name="searchString"
                value={searchString}
                onChange={handleChange}
                placeholder="Search for products..."
                className={styles.input}
            />
        </Form>
    );
};

export default React.memo(SearchForm);