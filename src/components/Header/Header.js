import { Link } from 'react-router-dom';
import './Header.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

function Header(props) {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <Link className="logo">
                    <h2>
                        <span>L</span>earn
            <span>F</span>rom
                        <span>Q</span>uiz
          </h2>
                </Link>
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <AmplifySignOut className="sign-out" />
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;