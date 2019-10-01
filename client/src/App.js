import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Guest from "./pages/Guest";
import Nav from "./components/Nav";
import ColorMenu from "./components/ColorMenu";
import API from "./utils/API";
import ReactNotification from "react-notifications-component";
import { Particles } from "../src/components/Particles";
import "react-notifications-component/dist/theme.css";
import "../src/style.css";

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
      isDemo: false,
      isUnder600: false,
      isMobile: false,
      eventID: "",
      colorsExpanded: false,
      menuBarExpanded: true
    };
    this.renderDefaultView();
  }
  componentDidMount() {
    window.changePrimaryColor = this.changePrimaryColor;
    if (this.state.userID !== "") {
      this.updateColors();
    }
    window.addEventListener("resize", () => this.updateWindowDimensions());
    this.updateWindowDimensions();
  }
  toggleMenuBar = () => {
    this.setState({ menuBarExpanded: !this.state.menuBarExpanded });
  };
  updateWindowDimensions = () => {
    if (window.innerWidth > 420) {
      if (this.state.isMobile === true) {
        this.setState({ isMobile: false });
      }
      console.log(window.innerWidth, "notmobile");
    } else if (window.innerWidth < 420) {
      if (this.state.isMobile === false) {
        this.setState({ isMobile: true });
      }
      console.log(window.innerWidth, "mobile");
    }
    if (window.innerWidth <= 600) {
      if (this.state.isUnder600 === false) {
        this.setState({ isUnder600: true });
      }
    } else if (window.innerWidth > 600) {
      if (this.state.isUnder600 === true) {
        this.setState({ isUnder600: false });
      }
    }
  };
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
          nameForGuest:
            result.data.data.firstName + " " + result.data.data.lastName,
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
  renderDefaultView = () => {
    if (this.state.loggedIn) {
      return (
        <Dashboard
          {...this.state}
          {...this.props}
          logOut={this.logOut}
          addNotification={this.addNotification}
          toggleColorMenu={this.toggleColorMenu}
          toggleDemo={this.toggleDemo}
          setUserID={this.setUserID}
          updateColors={this.updateColors}
        />
      );
    } else {
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
    this.setState({ colorsExpanded: !this.state.colorsExpanded });
  };

  render() {
    return (
      <Router>
        <div>
          <ColorMenu
            {...this.state}
            toggleMenuBar={this.toggleMenuBar}
            toggleColorMenu={this.toggleColorMenu}
            addNotification={this.addNotification}
            changePrimaryColor={this.changePrimaryColor}
            changeSecondaryColor={this.changeSecondaryColor}
            changeFontColor={this.changeFontColor}
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
