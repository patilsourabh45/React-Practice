import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Employee from './Employee';
import EmployeeData from './EmployeeData';
import People from '../People'
import Pagenotfound from "./Pagenotfound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Employee /> <People></People>
          </Route>
          <Route path="/employee/:employeeid" children={<EmployeeData />} />
          <Route path="*" component={Pagenotfound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;