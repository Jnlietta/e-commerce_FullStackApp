import styles from "./Button.module.scss";
import { Button as BootstrapButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Button = ({ type, path, buttonName, style, onClick }) => {
    if (type === 'submit') {
        return (
            <BootstrapButton
                type="submit"
                variant="primary"
                className={styles.button}
                style={style}
                onClick={onClick}
            >
                {buttonName}
            </BootstrapButton>
        );
    } else {
        return (
            <BootstrapButton
                variant="primary"
                as={NavLink}
                to={path}
                className={styles.button}
                style={style}
            >
                {buttonName}
            </BootstrapButton>
        );
    }
};

export default Button;