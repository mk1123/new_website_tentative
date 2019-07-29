import React from "react";
import "./css/app.scss";
import "./css/iosevka.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

class App extends React.Component {
  // state = {
  //   selectedOption: null
  // };
  // handleChange = selectedOption => {
  //   this.setState({ selectedOption });
  //   console.log(`Option selected:`, selectedOption);
  // };
  render() {
    const { mobile } = this.props;
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={props => <Home {...props} isMobile={mobile} />}
        />
        <Route
          path="/first-page"
          exact
          render={props => <FirstPage {...props} isMobile={mobile} />}
        />
        <Route
          path="/second-page"
          exact
          render={props => <SecondPage {...props} isMobile={mobile} />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
