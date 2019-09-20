import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Send from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Message from "./Message";
import "./Message.css";

class App extends React.Component {
  state = {
    userPosts: undefined,
    charCount: 140,
    tweet: ""
  };

  componentDidMount() {
    this.getData();
  }
  //
  getData = () => {
    let posts;
    let users;
    let userPosts;
    Promise.all([
      axios.get("/api/posts").then(res => (posts = res.data)),
      axios.get("/api/users").then(res => (users = res.data))
    ])
      .then(() => {

        userPosts = posts.map(value =>
          Object.assign({}, value, users.filter(v => v.id === value.user)[0])
        );
        this.setState({ userPosts });
      })
      .catch(() => this.setState({ error: true }));
  };

  handleChange = e => {
    if (this.state.charCount > 0) {
      this.setState({
        tweet: `${e.target.value}`,
        charCount: 140 - e.target.value.length
      });
    }
  };

  handlePost = () => {
    let time;
    time = Math.floor(Date.now() / 1000);

    axios
      .post("/api/posts", {
        user: 4,
        message: this.state.tweet,
        ts: time
      })
      .then(
        () => (this.getData(), this.setState({ charCount: 140, tweet: "" }))
      );
  };

  limit = e => {
    if (e.key === "Backspace" && this.state.charCount === 0) {
      this.setState({
        tweet: this.state.tweet.substring(0, 140),
        charCount: 1
      });
    }
  };

  render() {
    const { userPosts } = this.state;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        {!this.state.userPosts ? (
          <CircularProgress />
        ) : (
          //sdrror  ?

          // <div>api error, please refresh the browser</div>
          // :
          <Paper>
            {/* <div style={{margin: '0px 20px 0px 20px'}}> */}
            {userPosts.map((value, i) => (
              <Message
                key={i}
                username={value.username}
                image={value.image}
                real_name={value.real_name}
                ts={value.ts}
                message={value.message}
                active={value.active}
              />
            ))}
            <FormControl
              style={{ width: "100%", borderTop: "2px solid #38daae" }}
            >
              <Input
                value={this.state.tweet}
                onChange={this.handleChange}
                onKeyDown={this.limit}
                startAdornment={
                  <InputAdornment
                    style={{ fontFamily: "Roboto", marginLeft: "5px" }}
                    position="start"
                  >
                    {this.state.charCount}
                  </InputAdornment>
                }
                endAdornment={
                  <IconButton aria-label="directions" onClick={this.handlePost}>
                    <Send />
                  </IconButton>
                }
              />
            </FormControl>
            {/* </div> */}
          </Paper>
        )}
      </div>
    );
  }
}

export default App;
