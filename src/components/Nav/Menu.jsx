import React from "react";
import s from "./Menu.module.css";


import { NavLink, Link} from "react-router-dom";





function Menu() {
    return(
            <nav className="menu">
                <NavLink to="/">
                    <div className={s.item}>
                        <div className={s.icon}> </div>
                        <div className="menu_item_name"> Главная</div>
                    </div>
                </NavLink>
                <Link to="/abonent">
                    <div className={s.item}>
                        <div className={s.icon_abonent}></div>
                        <div className="menu_item_name"> Abonent</div>
                    </div>
                </Link>
                <Link to="/settings">
                    <div className={s.item}>
                        <div className={s.icon_settings}></div>
                        <div className="menu_item_name"> Settings</div>
                    </div>
                </Link>
                {/* <Link to="/">
                    <div className="menu_item">
                        <div className="menu_item_icon"> </div>
                        <div className="menu_item_name"> Главная</div>
                    </div>
                </Link>
                <Link to="/Chat">
                    <div className="menu_item">
                        <div className="menu_item_icon"></div>
                        <div className="menu_item_name"> ЧАТ</div>
                    </div>
                </Link>
                <Link to="/">
                    <div className="menu_item">
                        <div className="menu_item_icon"> </div>
                        <div className="menu_item_name"> Главная</div>
                    </div>
                </Link> */}
            </nav>   
    );
            }
export default Menu;