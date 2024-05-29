import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from './NavBar.module.scss';

const NavBar = ({ isLoggedIn }) => {
    return(
        <Navbar expand="lg" className={clsx('mb-4', styles['navbar-transparent'])}>
            <Container>
                <Navbar.Brand href="#home" className={styles.navbarBrand}>SWAY.</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
                    <Nav>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/clothes">Clothes</Nav.Link>
                        <Nav.Link as={NavLink} to="/accessories">Accessories</Nav.Link>
                        <Nav.Link as={NavLink} to="/sales">Sales</Nav.Link>

                        <Nav.Link as={NavLink} to="/cart" className={styles.cartIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
};

export default NavBar;