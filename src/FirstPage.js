import React from "react";
import { withRouter } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/themes/chrome-theme";
import "react-command-palette/themes/chrome.css";
import { isAbsolute } from "path";

class FirstPage extends React.Component {
  componentDidMount() {
    if (this.$ref && window.location.href.includes("#hi")) {
      console.log("in here");
      this.$ref.scrollIntoView({
        // optional params
        behaviour: "smooth",
        block: "start",
        inline: "center"
      });
    }
  }
  render() {
    const { history, section } = this.props;
    console.log(section);
    const commands = [
      {
        name: "/second-page",
        command() {
          console.log(history);
          history.replace("/second-page");
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
      <div style={{ position: "fixed", top: "50%" }}>
        <div>
          <CommandPalette
            commands={commands}
            display="modal"
            hotKeys="command+p"
            alwaysRenderCommands={true}
            theme={chrome}
            placeholder="Go anywhere"
            autofocus={false}
            trigger="Click me"
          />
        </div>
        <div
          ref={ref => {
            this.$ref = ref;
          }}>
          Other content
        </div>
      </div>
    );
  }
}

export default withRouter(FirstPage);
