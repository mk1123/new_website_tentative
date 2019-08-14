import React from "react";
import "./css/app.scss";
import "./css/iosevka.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Queue from "queue-fifo";

// this is the overall structure of the website, that gets passed along into all of the child components
const structure = {
  about_me: { contact: {}, resume: {} },
  projects: {
    "gm-hackathon": {},
    polly: {},
    "text-journal": {},
    utrient: {},
    "cal-admissions": {},
    "cal-eats": {}
  },
  experience: { pause: {}, dascena: {}, csm: {}, "data-science-society": {} },
  research: {
    math: {},
    sociology: {},
    modin: {},
    astrophysics: {},
    "college-basketball": {},
    "nba-hackathon": {}
  },
  sundry: {
    books: {},
    "board-games": {},
    "video-games": {},
    films: {},
    music: {}
  }
};

const parseStructure = structure => {
  var queue = new Queue();
  var returnedStructure = {};
  var parents = {};
  for (const [section, value] of Object.entries(structure)) {
    queue.enqueue([section, value]);
    // parents[section] = "";
    returnedStructure[section] = section + "/";
  }

  while (queue.size()) {
    const [nextSection, nextValue] = queue.dequeue();
    for (const [section, value] of Object.entries(nextValue)) {
      queue.enqueue([section, value]);
      parents[section] = returnedStructure[nextSection];
      returnedStructure[section] =
        returnedStructure[nextSection] + section + "/";
    }
  }

  return [returnedStructure, parents];
};

class App extends React.Component {
  // state = {
  //   selectedOption: null
  // };
  // handleChange = selectedOption => {
  //   this.setState({ selectedOption });
  //   console.log(`Option selected:`, selectedOption);
  // };
  componentDidMount() {
    const [newStructure, newParents] = parseStructure(structure);
    console.log(newParents);
  }
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
