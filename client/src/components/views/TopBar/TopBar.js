import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
//import { NavLink } from 'react-router-dom';

import styles from './TopBar.module.scss';
import clsx from 'clsx';

import { useDispatch } from 'react-redux';
import { setSearchStringTrue, toggleSearchStringVisibility } from '../../../redux/searchStringRedux';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ isLoggedIn }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(toggleSearchStringVisibility());
        if (window.location.pathname !== '/') {
            dispatch(setSearchStringTrue());
            navigate('/');
        }
    }

    return (
        <Container>
            <Nav className={'justify-content-end'}>

            {/* This code will be used in the future  
                {!isLoggedIn && 
                    <Nav.Link as={NavLink} to="/user/login" className={styles.links}>
                        <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
                    </Nav.Link>
                }
                {!isLoggedIn && 
                    <Nav.Link as={NavLink} to="/user/register" className={styles.links}>
                        <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
                    </Nav.Link>
                }
                {isLoggedIn &&
                    <Nav.Link as={NavLink} to="/user/logout" className={clsx(styles['links'], styles['linksLogout'])}>
                        <FontAwesomeIcon className={styles.icon} icon={faUser} /> Logout
                    </Nav.Link>
                }
            */}

                <Button variant="link" onClick={handleClick} className={clsx(styles['links'], styles['button-reset'])}>
                    <FontAwesomeIcon className={styles.icon} icon={faSearch} /> Search
                </Button>
            </Nav> 
        </Container>
    );
};

export default TopBar;
