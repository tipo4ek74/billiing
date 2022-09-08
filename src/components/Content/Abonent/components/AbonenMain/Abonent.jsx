import React from 'react';
import { Link} from "react-router-dom";
import s from "./Abonent.module.css";


export default function Abonent() {
  // fetch('http://localhost:5000/get-clients-by-SaldoEnd/1900')
  //   .then(response => response.json())
  //   .then(users => console.log(users))

    return (
      <div className={s.wrapper}>
              <div className={s.AbonentTable}>
                  <div className={s.ls}>Лицевой счёт</div>
                  <div className={s.FirstName}>ФИО</div>
                  <div className={s.LastName}>Улица</div>
                  <div className={s.saldo}>Дом</div>
                  <div className={s.saldo}>Сальдо</div>
              </div>
              <Link className={s.AbonentTable} to="/abonent">
              <div className={s.ls}>1111</div>
              <div className={s.name}>Иванов Иван Иванович</div>
              <div className={s.FirstName}>москворецкая</div>
              <div className={s.LastName}>53</div>
              <div className={s.saldo}>0</div>
              </Link>
              <Link className={s.AbonentTable} to="/abonent">
                  <div className={s.ls}>11111</div>
                  <div className={s.name}>Иванов Иван Иванович</div>
                  <div className={s.FirstName}>москворецкая</div>
                  <div className={s.LastName}>53</div>
                  <div className={s.saldo}>0</div>
              </Link>
  
          
      </div>
      
    )
  }


