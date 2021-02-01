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
  }
  div {
    width: 95%;
  }
  a {
    color: white;
  }
`;

export default function UserCard(props) {
  const user = props.user;
  return (
    <StyledDiv>
      <div>
        <img src={user.avatar_url} alt="" />
      </div>
      <div>
        <h2>Name: {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Company: {user.company}</p>
        <p>Bio: {user.bio}</p>
        <a href={user.repos_url}>Link to Repos</a>
      </div>
    </StyledDiv>
  );
}
