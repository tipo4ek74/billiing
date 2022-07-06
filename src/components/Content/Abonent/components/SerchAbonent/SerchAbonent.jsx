import React from "react";
import s from "./SearchAbonent.module.css";

function SerchAbonent () {
    return (
        <form className={s.SearchAbonent} action="#" method="post" encType="multipart/form-data">
            <h3>Параметры поиска абонентов</h3>
            <div className={s.FormBlok}>
                <p>Лицевой счёт</p>
                <input type="number" name="ls" />
            </div>
            <div className={s.FormBlok}>
                <p>ФИО абонента</p>
                <input type="text" name="fio" />
            </div>
            <div className={s.FormBlok}>
                <p>Улица</p>
                <input type="text" name="strit" />
            </div>
            <div className={s.FormBlok}>
                <p>Дом</p>
                <input type="text" name="home" />
            </div>
            <div className={s.FormBlok}>
                <p>Квартира</p>
                <input type="text" name="flat" />
            </div>
            <div className={s.FormBlok}>
                <p>Телефон</p>
                <input type="tel" name="PhoneNumber" />
            </div>
            <button className={s.button} type="submit" >Search</button>
        </form>
    )
}
export default SerchAbonent;