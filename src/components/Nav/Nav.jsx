import React from "react";
import { Link} from "react-router-dom";

import s from "./Nav.module.css";
// import Abonent from "../Content/Abonent/Abonent";
// import Settings from "../Content/settings/Settings";

function Nav () {
    return (
        <div className={s.nav}>
            
            <nav className={s.NavList}>
                <Link to="/abonent">
                    <div className={s.item}>
                        <div className={`${s.icon_Abonent} ${s.icon}`}></div>
                        <div className={s.ItemName}>Abonent</div>
                    </div>
                </Link>
                <Link to="/reports">
                    <div className={s.item}>
                        <div className={`${s.icon_Reports} ${s.icon}`}></div>
                        <div className={s.ItemName}>reporrs</div>
                    </div>
                </Link>
                <Link to="/search">
                    <div className={s.item}>
                        <div className={`${s.icon_Search} ${s.icon}`}></div>
                        <div className={s.ItemName}>search</div>
                    </div>
                </Link>
                <Link to="/dooraccounting">
                    <div className={s.item}>
                        <div className={`${s.icon_DoorAccounting} ${s.icon}`}></div>
                        <div className={s.ItemName}>Door accounting</div>
                    </div>
                </Link>
                <Link to="/suppliers">
                    <div className={s.item}>
                        <div className={`${s.icon_Suppliers} ${s.icon}`}></div>
                        <div className={s.ItemName}>suppliers</div>
                    </div>
                </Link>
                <Link to="/guides">
                    <div className={s.item}>
                        <div className={`${s.icon_Guides} ${s.icon}`}></div>
                        <div className={s.ItemName}>guides</div>
                    </div>
                </Link>
                <Link to="/houseguides">
                    <div className={s.item}>
                        <div className={`${s.icon_HouseGuides} ${s.icon}`}></div>
                        <div className={s.ItemName}>house guides</div>
                    </div>
                </Link>
                <Link to="/paymentdoc">
                    <div className={s.item}>
                        <div className={`${s.icon_PaymentDoc} ${s.icon}`}></div>
                        <div className={s.ItemName}>payment doc</div>
                    </div>
                </Link>
                <Link to="/personnel">
                    <div className={s.item}>
                        <div className={`${s.icon_Personnel} ${s.icon}`}></div>
                        <div className={s.ItemName}>personnel</div>
                    </div>
                </Link>
                <Link to="/webmessage">
                    <div className={s.item}>
                        <div className={`${s.icon_WebMessage} ${s.icon}`}></div>
                        <div className={s.ItemName}>Web message</div>
                    </div>
                </Link>
                <Link to="/operatorworklog">
                    <div className={s.item}>
                        <div className={`${s.icon_OperatorWorkLog} ${s.icon}`}></div>
                        <div className={s.ItemName}>Operator work log</div>
                    </div>
                </Link>
                <Link to="/settings">
                    <div className={s.item}>
                        <div className={`${s.icon_settings} ${s.icon}`}></div>
                        <div className={s.ItemName}>Settings</div>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Nav;