import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Dashboard from "./pages/Dashboard"
import ErrorPage from "./pages/ErrorPage";
// import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Manage" component={Manage} />
          <Route exact path="/Dashboard"component={Dashboard} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
