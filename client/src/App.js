import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    this.notificationDOMRef = React.createRef();

    this.state = {
      nameForGuest: "",
      userID: "",
      userData: "",
      loggedIn: false,
      primary: "white",
      secondary: "rgb(247, 238, 228)",
      font: "black",
      savedColors: {},
      colorMenuClass: "circle-picker-container",
      dataContainerClass: "dataContainer openMenu2",
      isDemo: false,
      eventID: ""
    };
    this.renderDefaultView();
  }

  addNotification = (
    inputTitle,
    inputMessage,
    notificationType,
    location = "top-center"
  ) => {
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
  };
  updateColors = () => {
    var colorArray = [];

    // console.log("updateColors function");
    API.getUser(this.state.userID, result => {
      colorArray = result.data.data.color;
      console.log("colors: " + colorArray);
      this.setState(
        {
          nameForGuest: result.data.data.firstName + " "+result.data.data.lastName,
          primary: colorArray[0],
          secondary: colorArray[1],
          font: colorArray[2]
        },
        () => {
          document.body.style.backgroundColor = this.state.primary;
        }
      );
    });
  };
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
    if (this.state.userID !== "") {
      this.updateColors();
    }
  }
  setUserID = value => {
    this.setState(
      {
        userID: value,
        eventID: value
      },
      () => {
        this.updateColors();
      }
    );
  };
  renderDefaultView = props => {
    if (this.state.loggedIn) {
      $(".MenuContainer").removeClass("invisible");
      return (
        <Dashboard
          {...this.props}
          {...this.state}
          logOut={this.logOut}
          addNotification={this.addNotification}
          toggleColorMenu={this.toggleColorMenu}
          toggleDemo={this.toggleDemo}
          setUserID={this.setUserID}
          updateColors={this.updateColors}
        />
      );
    } else {
      $(".MenuContainer").addClass("invisible");
      return (
        <Home
          {...this.props}
          {...this.state}
          flipToDash={this.toggleLoggedIn}
          addNotification={this.addNotification}
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
  toggleDataContainer = () => {
    if (this.state.dataContainerClass === "dataContainer") {
      this.setState({ dataContainerClass: "dataContainer openMenu2" });
    } else {
      this.setState({ dataContainerClass: "dataContainer" });
    }
  };
  toggleColorMenu = () => {
    if (this.state.colorMenuClass === "circle-picker-container") {
      this.setState({ colorMenuClass: "circle-picker-container circleChange" });
    } else {
      this.setState({ colorMenuClass: "circle-picker-container" });
    }
  };

  render() {
    return (
      <Router>
        <div>
          <ColorMenu
            {...this.state}
            addNotification={this.addNotification}
            changePrimaryColor={this.changePrimaryColor}
            changeSecondaryColor={this.changeSecondaryColor}
            changeFontColor={this.changeFontColor}
            dataContainerClass={this.toggleDataContainer}
          />
          <ReactNotification ref={this.notificationDOMRef} />
          <Nav secondary={this.state.secondary} font={this.state.font} />
          <Switch>
            <Route exact path="/" render={this.renderDefaultView} />
            <Route
              exact
              path="/event/:userID"
              render={() => (
                <Guest {...this.state} setUserID={this.setUserID} />
              )}
            />
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
