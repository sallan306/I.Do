import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import ErrorPage from "./pages/ErrorPage";
import Guest from "./pages/Guest";
import Nav from "./components/Nav";
import ColorMenu from "./components/ColorMenu"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      primaryColor: "white",
      secondaryColor: "rgb(247, 238, 228)",
      fontColor: "black"
    }
    this.renderDefaultView()
  }
  // componentWillMount(){
  //   this.renderDefaultView()
  // }

  changePrimaryColor = newColor => {
    this.setState({primaryColor: newColor});
  }
  changeSecondaryColor = newColor2 => {
    this.setState({secondaryColor: newColor2});
  }
  changeFontColor = newFont => {
    this.setState({fontColor: newFont});
  }
  componentDidMount(){
    window.changePrimaryColor = this.changePrimaryColor;
  }
  renderDefaultView = (props) => {
    if(this.state.loggedIn){
      return <Dashboard {...props}  secondaryColor={this.state.secondaryColor}
                                    fontColor={this.state.fontColor}/>
    } else {
      return <Home {...props}       secondaryColor={this.state.secondaryColor} 
                                    fontColor={this.state.fontColor}
                                    flipToDash={this.toggleLoggedIn} />
    }
  }
  
  toggleLoggedIn = () => {
    this.setState({loggedIn: true})
  }

  logOut = () => {
    this.setState({loggedIn: false})
    // TODO API Signout call.
    return <Redirect to="/" />
  }

  render(){
    return (
      <Router>
        <div>
        <ColorMenu    changePrimaryColor={this.changePrimaryColor} 
                      changeSecondaryColor={this.changeSecondaryColor} 
                      changeFontColor={this.changeFontColor} 
                      primaryColor={this.state.primaryColor}
                      secondaryColor={this.state.secondaryColor}
                      fontColor={this.state.fontColor}/>

          <Nav        secondaryColor={this.state.secondaryColor}
                      fontColor={this.state.fontColor}/>
          <Switch>
            <Route exact path="/" render={this.renderDefaultView}/>
            <Route exact path="/event/:userID" component={Guest} />
            <Route exact path="/Logout" render={this.logOut} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
