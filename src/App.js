import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class App extends Component {
  state = {
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/AftonSlone")
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        debugger;
      });

    axios
      .get("https://api.github.com/users/AftonSlone/followers")
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        debugger;
      });
  }
  render() {
    return (
      <StyledDiv>
        <GlobalStyle />

        <UserCard user={this.state.user} />
        <h3>Followers:</h3>
        {this.state.followers.map((follower) => (
          <FollowerCard follower={follower} key={follower.id} />
        ))}
      </StyledDiv>
    );
  }
}
