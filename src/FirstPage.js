import React from "react";
import { withRouter } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/themes/chrome-theme";
import "react-command-palette/themes/chrome.css";

class FirstPage extends React.Component {
  render() {
    const { history } = this.props;
    const commands = [
      {
        name: "/first-page",
        command() {
          console.log(history);
          history.replace("first-page");
        }
      },
      {
        name: "/second-page",
        command() {
          console.log(history);
          history.replace("second-page");
        }
      },
      {
        name: "/",
        command() {
          history.replace("/");
        }
      }
    ];
    return (
      <div>
        <CommandPalette
          commands={commands}
          display="inline"
          hotKeys="command+p"
          alwaysRenderCommands={false}
          theme={chrome}
          placeholder="Go anywhere"
          autofocus={true}
        />
        <p>Hello World</p>
      </div>
    );
  }
}

export default withRouter(FirstPage);
