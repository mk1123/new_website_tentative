import React from "react";
import { withRouter } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/themes/chrome-theme";
import "react-command-palette/themes/chrome.css";
import { isAbsolute } from "path";

class Home extends React.Component {
  render() {
    const { history, isMobile } = this.props;
    const commands = [
      {
        name: "/first-page",
        command() {
          console.log(history);
          history.push("/first-page");
          // return;
        }
      },
      {
        name: "/second-page",
        command() {
          console.log(history);
          history.push("second-page");
          // return;
        }
      },
      {
        name: "/",
        command() {
          history.replace("/");
          // return;
        }
      }
    ];
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "40vh",
          width: "40%",
          transform: "translate(-50%, -50px)"
        }}>
        <CommandPalette
          commands={commands}
          display="modal"
          hotKeys="command+p"
          //   alwaysRenderCommands={true}
          closeOnSelect={true}
          theme={chrome}
          placeholder={
            isMobile
              ? "Start typing or scroll up"
              : "Start typing or press ⌘/Ctrl-P"
          }
          autofocus={true}
          //   style={{ width: "100vh" }}
          // spinner={false}
        />
      </div>
    );
  }
}

export default withRouter(Home);
