import React from "react";
import { NavLink, Link} from "react-router-dom";

import s from "./Nav.module.css";
// import Abonent from "../Content/Abonent/Abonent";
// import Settings from "../Content/settings/Settings";

function Nav () {
    return (
        <div className={s.nav}>
            
            <nav className={s.NavList}>
                <Link to="/abonent">
                    <div className={s.item}>
                        <div className={s.icon_abonent}></div>
                        <div className={s.ItemName}> Abonent</div>
                    </div>
                </Link>
                <Link to="/settings">
                    <div className={s.item}>
                        <div className={s.icon_settings}></div>
                        <div className={s.ItemName}> Settings</div>
                    </div>
                </Link>

                {/* <Link to="/abonent">
                    <li className={s.list}>
                        <a href="/abonent" className={s.item}>
                            abonent
                        </a>
                    </li>
                </Link>
                <Link to="/settings">
                    <li className={s.list}>
                        
                        <a href="/settings" className={s.link}>
                            settings
                        </a>
                    </li>
                </Link> */}
            </nav>
        </div>
    )
}

export default Nav;