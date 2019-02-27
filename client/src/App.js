import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import ErrorPage from "./pages/ErrorPage";
import Guest from "./pages/Guest";
import Nav from "./components/Nav";
import ColorMenu from "./components/ColorMenu"
import API from "./utils/API"
import $ from "jquery"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userData: "",
      isLoggedIn: false,
      primary: "white",
      secondary: "rgb(247, 238, 228)",
      font: "black",
      savedColors: {}
    }
    this.renderDefaultView()
  }

  changePrimaryColor = newColor => {
    this.setState({primary: newColor});
  }
  changeSecondaryColor = newColor2 => {
    this.setState({secondary: newColor2});
  }
  changeFontColor = newFont => {
    this.setState({font: newFont});
  }
  componentDidMount(){
    window.changePrimaryColor = this.changePrimaryColor;
  }
  renderDefaultView = (props) => {
    if(this.state.loggedIn){
      $(".MenuContainer").removeClass("invisible")
      return <Dashboard {...props}  secondary={this.state.secondary}
                                    font={this.state.font}/>
    } else {
      $(".MenuContainer").addClass("invisible")
      return <Home {...props}       secondary={this.state.secondary} 
                                    font={this.state.font}
                                    flipToDash={this.toggleLoggedIn} />
    }
  }
  
  toggleLoggedIn = (userData) => {
    this.setState({
      loggedIn: true
    })
  }

  logOut = () => {
    this.setState({loggedIn: false})
    API.logout();
    return <Redirect to="/" />
  }

  render(){
    return (
      <Router>
        <div>
        <ColorMenu    changePrimaryColor={this.changePrimaryColor} 
                      changeSecondaryColor={this.changeSecondaryColor} 
                      changeFontColor={this.changeFontColor} 
                      primary={this.state.primary}
                      secondary={this.state.secondary}
                      font={this.state.font}
                      savedColors={this.state.savedColors}/>

          <Nav        secondary={this.state.secondary}
                      font={this.state.font}/>
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
