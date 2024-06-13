import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import { Button, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchStringVisibility, toggleSearchStringVisibility } from '../../../redux/searchStringRedux';

const TopBar = ({ isLoggedIn }) => {
    const dispatch = useDispatch();
    const isVisible = useSelector(getSearchStringVisibility);

    const handleClick = () => {
        console.log('Search clicked');

        dispatch(toggleSearchStringVisibility())
    }

    console.log('isVisible', isVisible);

    return (
        <Container>
            <Nav className={'justify-content-end'}>
                
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

                <Button variant="transparent" onClick={handleClick} className={styles.links}>
                    <FontAwesomeIcon className={styles.icon} icon={faSearch} /> Search
                </Button>
            </Nav> 
        </Container>
    );
};

export default TopBar;
