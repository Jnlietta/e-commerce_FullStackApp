import styles from "./Button.module.scss";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Products = ({ path , buttonName }) => {
    return (
        <Button variant="primary" as={NavLink} to={path} className={styles.button}>{buttonName}</Button>
    );
};

export default Products;