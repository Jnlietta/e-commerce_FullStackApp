import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";

const Header = props => {
    return(
        <div>
            <TopBar />
            <NavBar />
        </div>
    );
};

export default Header;