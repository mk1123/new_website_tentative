import React from "react";
import "./css/app.scss";
import "./css/iosevka.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import MainPage from "./MainPage";
import Queue from "queue-fifo";
import structure from "./content";

// this is the overall structure of the website, that gets passed along into all of the child components

const parseStructure = structure => {
  var queue = new Queue();
  var returnedStructure = {};
  var bodies = {};
  var parents = {};
  for (const [section, value] of Object.entries(structure)) {
    queue.enqueue([section, value]);
    parents[section] = "/";
    returnedStructure[section] = "/" + section;
    // pagesRoutes[section] = "/" + section;
  }

  while (queue.size()) {
    const [nextSection, nextValue] = queue.dequeue();
    for (const [section, value] of Object.entries(nextValue)) {
      if (section === "body") {
        bodies[nextSection] = value;
      } else {
        queue.enqueue([section, value]);
        parents[section] = returnedStructure[nextSection];
        returnedStructure[section] =
          returnedStructure[nextSection] + "/" + section;
      }
    }
  }

  return [returnedStructure, parents, bodies];
};

const everythingExceptOne = (mainKey, dict) => {
  var copy = Object.assign({}, dict);
  delete copy[mainKey];
  return copy;
};

class App extends React.Component {
  componentDidMount() {}
  render() {
    const { mobile } = this.props;
    const [newStructure, newParents, bodies] = parseStructure(structure);
    console.log(bodies);
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
        {Object.keys(newStructure).map(key => {
          return (
            <Route
              path={newStructure[key]}
              exact
              render={props => (
                <MainPage
                  {...props}
                  isMobile={mobile}
                  title={key}
                  unProcessedCommands={everythingExceptOne(key, newStructure)}
                  prev={newParents[key]}>
                  <div
                    style={{
                      color: "#505050"
                    }}>
                    {bodies[key]}
                  </div>
                </MainPage>
              )}
            />
          );
        })}
      </BrowserRouter>
    );
  }
}

export default App;
