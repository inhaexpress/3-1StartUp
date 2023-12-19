import React from "react";
import whitelogo from "../img/logo_white.png"
import blacklogo from "../img/logo.png"
import "./Contents.css"
import {Link} from "react-router-dom";
import paimonprofile from "../img/paimonProfile.png"
import harryprofile from "../img/HarryProfile.png"
import shrekprofile from "../img/ShrekProfile.png"
import terraprofile from "../img/TerraProfile.png"
const Contents = () => {
    return(
        <div className="contents">
            <Link to="/" className="logo"> <img className="mainlogo" src={blacklogo} alt="maf"/> </Link>
            <nav>
                <ul className="sidebarlist">
                    <li><Link to="/Paimon"><img src={paimonprofile} className="profileicon"/>페이몬</Link></li>
                    <br/><br/><br/>
                    <li><Link to="/Harry"><img src={harryprofile} className="profileicon"/>해리 포터</Link></li>
                    <br/><br/><br/>
                    <li><Link to="/Shrek"><img src={shrekprofile} className="profileicon"/>슈렉</Link></li>
                    <br/><br/><br/>
                    <li><Link to="/Terra"><img src={terraprofile} className="profileicon"/>테라</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Contents