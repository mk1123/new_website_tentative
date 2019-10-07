import React from "react";
import { withRouter } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/themes/chrome-theme";
import "react-command-palette/themes/chrome.css";

class Home extends React.Component {
  commandCreator = parsedStructure => {
    const { history } = this.props;
    const returnCommands = [];
    const keys = Object.keys(parsedStructure);
    for (const key of keys) {
      returnCommands.push({
        name: parsedStructure[key],
        command() {
          // console.log(history);
          history.replace(parsedStructure[key]);
        }
      });
    }
    return returnCommands;
  };
  render() {
    const { isMobile, unProcessedCommands } = this.props;
    const commands = this.commandCreator(unProcessedCommands);
    return (
      <div
        style={{
          overflow: "hidden"
        }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "40vh",
            width: isMobile ? "70%" : "40%",
            height: "50%",
            transform: "translate(-50%, -50px)",
            overflow: "hidden"
          }}>
          <CommandPalette
            commands={commands}
            display="inline"
            hotKeys="command+p"
            //   alwaysRenderCommands={true}
            closeOnSelect={true}
            theme={chrome}
            placeholder={isMobile ? "Start typing." : "Start typing."}
            autofocus={true}
            maxDisplayed={9}
            options={{
              key: "name", // default is "name"
              keys: ["name"], // default is "name"

              // other options may be freely configured
              threshold: -Infinity,
              limit: 10,
              allowTypo: true,
              scoreFn: null
            }}
            //   style={{ width: "100vh" }}
            // spinner={false}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-end",
            width: "100%",
            position: "absolute",
            bottom: "0px",
            padding: "10px"
          }}>
          <div
            style={{
              // position: "absolute",
              // bottom: "0%",
              // right: "20px",
              // marginLeft: "auto",
              // marginRight: 0,
              // float: "left",
              // align: "right",
              width: "70%",
              // right: "50px",
              fontSize: "0.7em",
              color: "#505050"
            }}>
            © Manan Khattar, 2019. Font used:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://typeof.net/Iosevka/">
              Iosevka SS09.
            </a>{" "}
            Credit to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/asabaylus">
              asabaylus
            </a>{" "}
            for <kbd>react-command-palette</kbd>, a fantastic package.{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
