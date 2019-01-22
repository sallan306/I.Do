import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Dashboard from "./pages/Dashboard"
import ErrorPage from "./pages/ErrorPage";
import Guest from "./pages/Guest";
import Nav from "./components/Nav";
import ColorMenu from "./components/ColorMenu"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  renderDefaultView = () => {
    if(this.state.loggedIn){
      return <Dashboard />
    } else {
      return <Home flipToDash={this.toggleLoggedIn} />
    }
  }
  
  toggleLoggedIn = () => {
    this.setState({loggedIn: !this.state.isLoggedIn})
  }

  logOut = () => {
    
  }

  render(){
    return (
      <Router>
        <div>
          <ColorMenu/>
          <Nav/>
          <Switch>

            <Route exact path="/" render={this.renderDefaultView} />
            <Route exact path="/Guest" component={Guest} />
            <Route exact path="/Manage" component={Manage} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Logout" render={<Redirect to="/" />} />
              />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
