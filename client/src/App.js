import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Dashboard from "./pages/Dashboard"
import ErrorPage from "./pages/ErrorPage";
import Guest from "./pages/Guest";
import Nav from "./components/Nav";
import ColorMenu from "./components/ColorMenu"

class App extends React.Component {
  state = {
    bkgColor: "green"
  }
  changeBkgColor = newColor => {
    this.setState({bkgColor: newColor});
  }
  componentDidMount(){
    window.changeBkgColor = this.changeBkgColor;
  }
  render() {
    const myStyle = {
      width:50,
      height:50,
      background: this.state.bkgColor
    }
    return (
      <Router>
        <div>
          <div style={myStyle}></div>
          <ColorMenu changeBkgColor={this.changeBkgColor} bkgColor={this.state.bkgColor}/>
          <Nav/>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} bkgColor={this.state.bkgColor} />} />
            <Route exact path="/Guest" component={Guest} />
            <Route exact path="/Manage" component={Manage} />
            <Route exact path="/Dashboard"component={Dashboard} />
            {/* <Route exact path="/books/:id" component={Detail} /> */}
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
