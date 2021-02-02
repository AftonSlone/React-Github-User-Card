import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";


const StyledDiv = styled.div`
  background: grey;
  color: white;
  width: 40%;
  display: flex;
  border-radius: 25px;
  margin-bottom: 20px;

  align-items: center;

  img {
    width: 50%;
    margin-left: 45px;
  }
  div {
    width: 95%;
    margin-bottom: 10px;
  }
  a {
    color: white;
  }

  .infoWrapper {
    margin-bottom: 25px;
  }
`;

export default class UserCard extends Component {
  state = {
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.props.user}`)
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        debugger;
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {

    axios
      .get(`https://api.github.com/users/${this.props.user}`)
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        debugger;
      });
    }
  }

  render() {
    return (
        <StyledDiv>
          <div>
            <img src={this.state.user.avatar_url} alt="" />
          </div>
          <div className="infoWrapper">
            <h2>Name: {this.state.user.name}</h2>
            <p>Username: {this.state.user.login}</p>
            <p>Location:{this.state.user.location}</p>
            <p>Company: {this.state.user.company}</p>
            <p>Bio: {this.state.user.bio}</p>
            <a href={this.state.user.repos_url}>Link to Repos</a>
          </div>
        </StyledDiv>
    );
  }
}
