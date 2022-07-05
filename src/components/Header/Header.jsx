import React from "react";
import logo from "./logo.png";
import s from "./Header.module.css";
import Nav from "../Nav/Nav";

function Header() {
    return (
        <div className={s.header}>
                <img src={logo} className={s.logo} alt="logo"></img>
            <Nav />
        </div>
    )
}

export default Header;