import React, { Component } from "react";

class NewComment extends Component {
  constructor(props) {
    super(props);

    this.handleEnter = this.handleEnter.bind(this);
  }
  handleEnter(event) {
    if (event.keyCode === 13) {
      this.props.postNewComment({
        comment: this.refs.comment.value
      });
      this.refs.comment.value = "";
      event.preventDefault();
    }
    console.log(event.keyCode);
  }

  render() {
    return (
      <div className="row">
        <textarea
          placeholder="Comente!"
          className="form-control"
          row="4"
          ref="comment"
          onKeyDown={this.handleEnter}
        />
      </div>
    );
  }
}

export default NewComment;
