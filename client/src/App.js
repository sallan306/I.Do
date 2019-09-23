import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Guest from "./pages/Guest";
import Nav from "./components/Nav";
import ColorMenu from "./components/ColorMenu";
import API from "./utils/API";
import $ from "jquery";
import ReactNotification from "react-notifications-component";
import { Particles } from "../src/components/Particles";

// import 'bootstrap/dist/css/bootstrap.min.css'
import "react-notifications-component/dist/theme.css";
import "../src/components/Nav/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.toggleColorMenu = this.toggleColorMenu.bind(this);
    this.notificationDOMRef = React.createRef();

    this.state = {
      userData: "",
      loggedIn: false,
      primary: "white",
      secondary: "rgb(247, 238, 228)",
      font: "black",
      savedColors: {},
      colorMenuClass: "circle-picker-container",
      dataContainerClass: "dataContainer openMenu2",
      isDemo: false
    };
    this.renderDefaultView();
  }

  addNotification(
    inputTitle,
    inputMessage,
    notificationType,
    location = "top-center"
  ) {
    this.notificationDOMRef.current.addNotification({
      title: inputTitle,
      message: inputMessage,
      type: notificationType,
      insert: "bottom",
      container: location,
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 3002 },
      dismissable: { click: true }
    });
  }

  changePrimaryColor = newColor => {
    this.setState({ primary: newColor });
  };
  changeSecondaryColor = newColor2 => {
    this.setState({ secondary: newColor2 });
  };
  changeFontColor = newFont => {
    this.setState({ font: newFont });
  };
  componentDidMount() {
    window.changePrimaryColor = this.changePrimaryColor;
  }
  renderDefaultView = props => {
    if (this.state.loggedIn) {
      $(".MenuContainer").removeClass("invisible");
      return (
        <Dashboard
          {...props}
          secondary={this.state.secondary}
          font={this.state.font}
          loggedIn={this.state.loggedIn}
          logOut={this.logOut}
          addNotification={this.addNotification}
          toggleColorMenu={this.toggleColorMenu}
          dataContainerClass={this.state.dataContainerClass}
          isDemo={this.state.isDemo}
          toggleDemo={this.toggleDemo}
        />
      );
    } else {
      $(".MenuContainer").addClass("invisible");
      return (
        <Home
          {...props}
          secondary={this.state.secondary}
          font={this.state.font}
          flipToDash={this.toggleLoggedIn}
          loggedIn={this.state.loggedIn}
          addNotification={this.addNotification}
          isDemo={this.state.isDemo}
          toggleDemo={this.toggleDemo}
        />
      );
    }
  };

  toggleLoggedIn = userData => {
    this.setState({
      loggedIn: true
    });
  };
  toggleDemo = () => {
    this.setState({
      isDemo: !this.state.isDemo
    });
    // console.log("demo activated")
  };

  logOut = event => {
    this.setState({ loggedIn: false });
    event.preventDefault();
    API.logout();
    window.location.reload();
  };
  toggleDataContainer() {
    if (this.state.dataContainerClass === "dataContainer") {
      this.setState({ dataContainerClass: "dataContainer openMenu2" });
    } else {
      this.setState({ dataContainerClass: "dataContainer" });
    }
  }
  toggleColorMenu() {
    if (this.state.colorMenuClass === "circle-picker-container") {
      this.setState({ colorMenuClass: "circle-picker-container circleChange" });
    } else {
      this.setState({ colorMenuClass: "circle-picker-container" });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <ColorMenu
            {...this.state}
            changePrimaryColor={this.changePrimaryColor}
            changeSecondaryColor={this.changeSecondaryColor}
            changeFontColor={this.changeFontColor}
            dataContainerClass={this.toggleDataContainer}
          />
          <ReactNotification ref={this.notificationDOMRef} />
          <Nav secondary={this.state.secondary} font={this.state.font} />
          <Switch>
            <Route exact path="/" render={this.renderDefaultView} />
            <Route exact path="/event/:userID" component={Guest} />
            <Route exact path="/Logout" render={this.logOut} />
            <Route component={ErrorPage} />
          </Switch>
          <Particles secondary={this.state.secondary} />
        </div>
      </Router>
    );
  }
}

export default App;
