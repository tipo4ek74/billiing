import React from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import SerchAbonent from "./components/SerchAbonent/SerchAbonent";
// import SerchAbonent from "./components/SerchAbonent/SerchAbonent"



function AbonentMain () {
    return (
        <Router>
          <Switch>
            <Route exact path="/abonent" component={SerchAbonent} />
            <Route exact path="/abonent" component={SerchAbonent} />
            
          </Switch>
        </Router>
    )
}

export default AbonentMain;