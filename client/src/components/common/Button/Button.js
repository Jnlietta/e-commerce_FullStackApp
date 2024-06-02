import styles from "./Button.module.scss";
import { Button as BootstrapButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Button = ({ path , buttonName, style, type, onClick }) => {
    return (
        <BootstrapButton type={type} variant="primary" as={NavLink} to={path} className={styles.button} style={style} onClick={onClick}>
            {buttonName}
        </BootstrapButton>
    );
};

export default Button;