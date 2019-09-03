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
  "": {},
  about_me: { contact: {}, resume: {} },
  projects: {
    children: {
      "gm-hackathon": {},
      polly: {},
      "text-journal": {},
      utrient: {},
      "cal-admissions": {},
      "cal-eats": {}
    }
  },
  experience: {
    industry: {
      children: { pause: {}, dascena: {}, "data-science-society": {} }
    },
    teaching: {
      children: { "cs-mentors": {}, algorithms: {}, "data-science": {} }
    }
  },
  research: {
    children: {
      math: {},
      sociology: {},
      modin: {},
      astrophysics: {},
      "college-basketball": {},
      "nba-hackathon": {}
    }
  },
  misc: {
    books: {},
    "board-games": {},
    "video-games": {},
    films: {},
    music: {},
    "other-interests": {}
  }
};

const parseStructure = structure => {
  var queue = new Queue();
  var returnedStructure = {};
  var parents = {};
  for (const [section, value] of Object.entries(structure)) {
    queue.enqueue([section, value]);
    parents[section] = "";
    if (section.length) {
      returnedStructure[section] = "/" + section + "/";
    } else {
      returnedStructure[section] = "/";
    }
  }

  while (queue.size()) {
    const [nextSection, nextValue] = queue.dequeue();
    for (const [section, value] of Object.entries(nextValue)) {
      if (Object.keys(nextValue)[0] === "children") {
        for (const [section1, value1] of Object.entries(
          nextValue["children"]
        )) {
          returnedStructure[section1] =
            returnedStructure[nextSection].slice(
              0,
              returnedStructure[nextSection].length - 1
            ) +
            "#" +
            section1;
        }
      } else {
        queue.enqueue([section, value]);
        parents[section] = returnedStructure[nextSection];
        returnedStructure[section] =
          returnedStructure[nextSection] + section + "/";
      }
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
    console.log(newStructure);
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
