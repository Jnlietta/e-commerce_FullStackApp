import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";
import styles from './Header.module.scss';

const Header = props => {
    return(
        <div className={styles.headerContainer}>
            <div className={styles.backgroundOverlay}></div>
            <TopBar />
            <NavBar />
        </div>
    );
};

export default Header;