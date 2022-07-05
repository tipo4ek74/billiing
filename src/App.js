import './App.css';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import Header from './components/Header/Header';
import Abonent from './components/Content/Abonent/Abonent';
import Reports from './components/Content/Reporrs/Reporrs';
import Search from './components/Content/Search/Search';
import DoorAccounting from './components/Content/DoorAccounting/DoorAccounting';
import Suppliers from './components/Content/Suppliers/Suppliers';
import Guides from './components/Content/Guides/Guides';
import HouseGuides from './components/Content/HouseGuides/HouseGuides';
import PaymentDoc from './components/Content/PaymentDoc/PaymentDoc';
import Personnel from './components/Content/Personnel/Personnel';
import WebMessage from './components/Content/WebMessage/WebMessage';
import OperatorWorkLog from './components/Content/OperatorWorkLog/OperatorWorkLog';
import Settings from './components/Content/settings/Settings';


function App() {
  return (
    <div className="wrapper">
        <Router>
        <Header />
        

          
          <Switch>
            
              <Route  path="/abonent" component={Abonent}/>
              <Route  path="/reports" component={Reports}/>
              <Route  path="/search" component={Search}/>
              <Route  path="/dooraccounting" component={DoorAccounting}/>
              <Route  path="/suppliers" component={Suppliers}/>
              <Route  path="/guides" component={Guides}/>
              <Route  path="/HouseGuides" component={HouseGuides}/>
              <Route  path="/PaymentDoc" component={PaymentDoc}/>
              <Route  path="/Personnel" component={Personnel}/>
              <Route  path="/WebMessage" component={WebMessage}/>
              <Route  path="/OperatorWorkLog" component={OperatorWorkLog}/>
              <Route  path="/settings" component={Settings}/>
          
          </Switch>
        </Router>
      
      
    </div>
  );
}

export default App;
