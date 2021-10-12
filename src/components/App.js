import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employee from './Employee';
import EmployeeData from './EmployeeData';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Employee />
          </Route>
          <Route path="/employee/:employeeid" children={<EmployeeData />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;