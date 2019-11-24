import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/themes/chrome-theme";
import "react-command-palette/themes/chrome.css";

export default class MainPage extends React.Component {
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
    return (
      <div>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col>
              <p style={{ lineHeight: "25px", float: "right" }}>
                (⌘-P/Ctrl-P to navigate)
              </p>
            </Col>
            <Col xs={6}>
              <b>
                <Link to={this.props.prev}>&lt;&lt;&lt; {this.props.prev}</Link>
              </b>
              <h2 style={{ marginTop: "38px" }}>{this.props.title}</h2>
              <div style={{ marginTop: "20px" }}>
                {this.props.body} <br />{" "}
                <p style={{ fontSize: "0.8em" }}>
                  Last updated: {this.props.lastUpdated}
                </p>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        {!this.props.isMobile ? (
          <div>
            <div style={{ display: "none" }}>
              <CommandPalette
                commands={this.commandCreator(this.props.unProcessedCommands)}
                display="modal"
                hotKeys="command+p"
                //   alwaysRenderCommands={true}
                closeOnSelect={true}
                theme={chrome}
                placeholder="Go anywhere. ESC to close."
                autofocus={true}
                maxDisplayed={10}
                options={{
                  key: "name", // default is "name"
                  keys: ["name"], // default is "name"

                  // other options may be freely configured
                  threshold: -Infinity,
                  limit: 10,
                  allowTypo: true,
                  scoreFn: null
                }}
                style={{
                  width: "50px"
                }}
              />
            </div>
            <div style={{ display: "none" }}>
              <CommandPalette
                commands={this.commandCreator(this.props.unProcessedCommands)}
                display="modal"
                hotKeys="ctrl+p"
                //   alwaysRenderCommands={true}
                closeOnSelect={true}
                theme={chrome}
                placeholder="Go anywhere. ESC to close."
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
                style={{
                  width: "50px"
                }}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
