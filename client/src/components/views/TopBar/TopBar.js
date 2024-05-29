import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const TopBar = ({ isLoggedIn }) => (
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

    </Nav> 
  </Container>
);

export default TopBar;
