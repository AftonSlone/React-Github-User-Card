import React, { Component } from "react";
import axios from 'axios'

import UserCard from "./UserCard";

import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  div {
    width: 60%;
  }
`;

export default class App extends Component {
  state = {
    user: "shaneslone",
    followers: []
  };

  fetchFollowers = () => {
    axios
    .get(`https://api.github.com/users/${this.state.user}/followers`)
    .then(res => {
      this.setState({
        followers: res.data
      })
      console.log(this.state)
    })
    .catch((() => {
      debugger
    }))
  }

  componentDidMount(){
    this.fetchFollowers()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {

    this.fetchFollowers()
    }
  }


  onSubmit = (value) => {
    this.setState({
      user: value,
    });
    
  }
  render() {
    return (
      <StyledDiv>
        <GlobalStyle />
        <SearchBar onSubmit={this.onSubmit} />
        <UserCard user={this.state.user} />
        <h3>Followers:</h3>
        {this.state.followers.map(follower => <UserCard user={follower.login} />)}
      </StyledDiv>
    );
  }
}
