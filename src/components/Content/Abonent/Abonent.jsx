import React from "react";
import SerchAbonent from "./components/SerchAbonent/SerchAbonent";

// let val {
//     ls: 1111;
//     name: Иванов;
//     firsname: Иван;
//     lastname: Иванович;
//     saldo: 0;
// }

function Abonent () {
    return (
        <div className="ContentWrapper">
            <div className="FirstBlok">
                <SerchAbonent />
            </div>
            <div className="SecondBlok">
            SeccondBlok
            </div>
        </div>
    )
}

export default Abonent;