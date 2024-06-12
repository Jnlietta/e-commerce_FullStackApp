import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, updateSearchString } from '../../../redux/searchStringRedux';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
    const searchString = useSelector(getSearchString);
    console.log(searchString);
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

export default SearchForm;