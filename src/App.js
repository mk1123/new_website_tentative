import React from "react";
import "./css/app.scss";
import "./css/iosevka.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import MainPage from "./MainPage";
import Queue from "queue-fifo";

// this is the overall structure of the website, that gets passed along into all of the child components
const structure = {
  about: { contact: {}, resume: {}, website: {} },
  projects: {
    "gm-hackathon": {},
    polly: {},
    "text-journal": {},
    utrient: {},
    "cal-admissions": {},
    "cal-eats": {},
    "social-network": {},
    "raise-social-game": {}
  },
  experience: {
    industry: { pause: {}, dascena: {}, dss: {} },
    teaching: {
      "cs-mentors": {},
      algorithms: {},
      "data-science": {},
      "cs-scholars": {}
    }
  },
  research: {
    math: {},
    sociology: {},
    modin: {},
    astrophysics: {},
    "college-bball": {},
    "nba-hackathon": {},
    "slam-indoor-mapping": {},
    "raise-social-game": {},
    pocab: {}
  },
  my: {
    books: {},
    "board-games": {},
    "video-games": {},
    films: {},
    music: {},
    interests: {},
    thoughts: {},
    "weekly-updates": {}
  }
};

const parseStructure = structure => {
  var queue = new Queue();
  var returnedStructure = {};
  var pagesRoutes = {};
  var parents = {};
  for (const [section, value] of Object.entries(structure)) {
    queue.enqueue([section, value]);
    parents[section] = "/";
    returnedStructure[section] = "/" + section;
    pagesRoutes[section] = "/" + section;
  }

  while (queue.size()) {
    const [nextSection, nextValue] = queue.dequeue();
    for (const [section, value] of Object.entries(nextValue)) {
      // if (Object.keys(nextValue)[0] === "children") {
      //   for (const [section1, value1] of Object.entries(
      //     nextValue["children"]
      //   )) {
      //     returnedStructure[section1] =
      //       returnedStructure[nextSection] + "#" + section1;
      //   }
      // } else
      //  {
      queue.enqueue([section, value]);
      parents[section] = returnedStructure[nextSection];
      returnedStructure[section] =
        returnedStructure[nextSection] + "/" + section;
      // }
    }
  }

  return [returnedStructure, parents, pagesRoutes];
};

const everythingExceptOne = (key, dict) => {
  return (({ key, ...others }) => ({ ...others }))(dict);
};

class App extends React.Component {
  componentDidMount() {}
  render() {
    const { mobile } = this.props;
    const [newStructure, newParents, newRoutes] = parseStructure(structure);
    // const newPagesWithoutFirst = (({ home, ...others }) => ({ ...others }))(
    //   newRoutes
    // );
    // const newStructureWithoutFirst = (({ home, ...others }) => ({ ...others }))(
    //   newStructure
    // );
    // console.log(newPagesWithoutFirst);
    console.log(newStructure, newRoutes);
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={props => (
            <Home
              {...props}
              isMobile={mobile}
              unProcessedCommands={newStructure}
            />
          )}
        />
        {Object.keys(newRoutes).map(key => {
          return (
            <Route
              path={newRoutes[key]}
              exact
              render={props => (
                <MainPage
                  {...props}
                  isMobile={mobile}
                  title={key}
                  unProcessedCommands={everythingExceptOne(key, newStructure)}
                  prev={newParents[key]}
                />
              )}
            />
          );
        })}
      </BrowserRouter>
    );
  }
}

export default App;
