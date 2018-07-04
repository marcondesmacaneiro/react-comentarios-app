import React from "react";

//functional stateless component

const Comment = props => {
  return (
    <div className="card">
      <p className="card-body">
        {props.comment.comment}
        <br />
        <small>
          <b>por: {props.comment.user.name}</b>
        </small>
      </p>
    </div>
  );
};

export default Comment;
