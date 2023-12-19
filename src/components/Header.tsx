import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../img/logo.png'

const Header = () => {
        return(
            <header id="header">
                <nav>
                    <Link to="/" className="logo"> <img className="maf" src={logo} alt="maf"/> </Link>
                    <ul className="lists">
                        <li><Link to="/boards">문의</Link></li>
                        <li> | </li>
                        <li><Link to="/Terra">채팅</Link></li>
                        <li>&nbsp;&nbsp;&nbsp;</li>
                    </ul>
                </nav>
            </header>
        )
}

export default Header
