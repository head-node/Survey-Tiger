import React from "react";
import "./App.css";
import logo from "./logo.png";
import { Button } from "reactstrap";
import CreateSurvey from "./CreateSurvey"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container"> 
      {/* Since this logo is available to all pages So
      make it outside to switch, as it would work like global */}
      <img src={logo} alt="logo"></img>
        <Switch> 
          {/* All Routes are stored inside Switch tag, consider Routes as Children to Switch */}
          <Route path="/create"><CreateSurvey/></Route>
          <Route path="/take">TAKE SURVEY</Route>

          {/* Start of our home page */}
          <Route path="/">
            
            <div className="button">
              {/* we created a button inside Link tag for better UX */}
              <Link to="/create">
                <Button className="btn-survey">CREATE SURVEY</Button>
              </Link>
              
              <Link to="/take">
                <Button className="btn-survey">TAKE SURVEY</Button>
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
