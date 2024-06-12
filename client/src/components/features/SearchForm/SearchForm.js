import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, updateSearchString } from '../../redux/searchStringRedux.js';

const SearchForm = () => {
    const searchString = useSelector(getSearchString);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(updateSearchString(e.target.value));
    };

    return (
        <Form className="d-flex">
            <Form.Control
                type="text"
                value={searchString}
                onChange={handleChange}
                placeholder="Search..."
            />
        </Form>
    );
};

export default SearchForm;