import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './NavBar.module.scss';

const NavBar = ({ isLoggedIn }) => {
    return(
        <Navbar expand="lg" className={clsx('mb-4', styles['navbar-transparent'])}>
            <Container>
                <Navbar.Brand href="#home" className={styles.navbarBrand}>SWAY.</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    {!isLoggedIn && <Nav.Link as={NavLink} to="/user/register">Sign in</Nav.Link>}
                    {!isLoggedIn && <Nav.Link as={NavLink} to="/user/login">Sign up</Nav.Link>}
                    {isLoggedIn && <Nav.Link as={NavLink} to="/user/logout">Sign out</Nav.Link>}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;