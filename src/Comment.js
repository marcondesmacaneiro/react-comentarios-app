import React, { Component } from "react";

//functional stateless component

const Comment = props => {
  return (
    <div className="card">
      <p className="card-body">{props.comment.comment}</p>
    </div>
  );
};

export default Comment;
