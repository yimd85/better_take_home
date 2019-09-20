import React from "react";
import Paper from "@material-ui/core/Paper";
import AvatarComponent from "./AvatarComponent";
import CalendarToday from "@material-ui/icons/CalendarToday";


export default class Message extends React.Component {
  state = { show: false };
  render() {
    return (
      <div
        style={{
          fontFamily: "Roboto",
          display: "flex",
          flexDirection:
            this.props.username === "currentuser" ? "row-reverse" : "row",
          margin: "20px"
        }}
      >
        <AvatarComponent
          alt={this.props.username}
          src={this.props.image}
          username={this.props.username}
        />
        <div
          style={{
            padding:
              this.props.username === "currentuser"
                ? "0px 10px 0px 0px"
                : "0px 0px 0px 10px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                display:
                  this.props.username === "currentuser" ? "none" : "inline"
              }}
            >{`${this.props.real_name} - @${this.props.username}`}</div>
            <div>{`${new Date(this.props.ts * 1000).toLocaleDateString(
              "en-US"
            )}`}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Paper
              id={"rotation"}
              style={{
                padding: "10px",
                color: this.state.show
                  ? "white"
                  : this.props.username === "currentuser"
                  ? "white"
                  : "black",
                backgroundColor: this.state.show
                  ? "#4b0082"
                  : this.props.username === "currentuser"
                  ? "#38daae"
                  : "#e5e5e5"
              }}
              onMouseOver={() => this.setState({ show: !this.state.show })}
              onMouseOut={() => this.setState({ show: !this.state.show })}
            >
              <div style={{ position: "absolute" }}>
                <div
                  style={{ visibility: this.state.show ? undefined : "hidden" }}
                >
                  <CalendarToday />{` Active since ${this.props.active}`}
                </div>
              </div>
              <div
                style={{ visibility: this.state.show ? "hidden" : undefined }}
              >
                {this.props.message}
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
