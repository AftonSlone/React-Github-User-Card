import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: grey;
  color: white;
  width: 40%;
  display: flex;
  border-radius: 25px;

  align-items: center;

  img {
    width: 50%;
    margin-left: 45px;
    padding: 10px;
    margin-top: 5px;
  }
  div {
    width: 95%;
  }
  a {
    color: white;
  }
`;

export default function FollowerCard(props) {
  const follower = props.follower;

  return (
    <StyledDiv>
      <div>
        <img src={follower.avatar_url} alt="" />
      </div>
      <div>
        <h2>{follower.login}</h2>
        <a href={follower.repos_url}>Link to Repos</a>
      </div>
    </StyledDiv>
  );
}
