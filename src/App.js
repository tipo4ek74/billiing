import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Abonent from './components/Content/Abonent/Abonent';
import Settings from './components/Content/settings/Settings';


function App() {
  return (
    <div className="wrapper">
        <Router>
        <Header />
        

          
          <Switch>
            
              <Route  path="/abonent" component={Abonent}/>
              <Route  path="/settings" component={Settings}/>
          
          </Switch>
        </Router>
      
      
    </div>
  );
}

export default App;
