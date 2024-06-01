import ProductForm from "../../features/ProductForm/ProductForm";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsRedux';

const Product = props => {
    const { id } = useParams();
    const product = useSelector(state => getProductById(state, id));

    return(
        <ProductForm product={product} />
    );
};

export default Product;