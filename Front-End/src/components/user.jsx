import React from "react";

const User = ({ match }) => {
  return <h1>Welcome user {match.params.username}</h1>;
};

export default User;
