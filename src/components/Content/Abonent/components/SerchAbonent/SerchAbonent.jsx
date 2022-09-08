import React from "react";
import Abonent from "../AbonenMain/Abonent";
import s from "./SearchAbonent.module.css";

function SerchAbonent () {
    const searchUsers = () => {
        // console.log(s.SearchAbonent)
        // const inp = document.querySelector()
        // const val = inp.value

        const inputs = document.querySelectorAll('input')
        // let inputValues = ''

        // for (const input of inputs) {
        //     inputValues += input.value + ' '
        // }

        // alert(inputValues)

        const [ls, flat] = [inputs[0].value, inputs[5].value]

        fetch(`http://localhost:5000/${ls}/${flat}`)
        .then(response => response.json())
        .then(result => {
            /*

            const div = document.querySelector('mydiv')
            div.innerHTML = result[0].Ls

            */

            console.log(result)
        })
        .catch(err => {
            console.error(err);
          });
    }

    return (
        <div className="ContentWrapper">
            <div className="FirstBlok">
            <form className={s.SearchAbonent}>
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

            <button className={s.button} onClick={() => searchUsers()}>Search</button>
        </form>
            </div>
            <div className="SecondBlok">
            <Abonent />
            </div>
            
        </div>
        
        
    )
}
export default SerchAbonent;