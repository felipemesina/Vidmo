import React, { Component } from "react";

class Like extends Component {
  likedOrNot() {
    let classes = "";
    if (this.props.liked) {
      classes = "far fa-heart";
      return classes;
    } else {
      classes = "fas fa-heart";
      return classes;
    }
  }

  render() {
    return (
      <i
        onClick={this.props.onClick}
        className={this.likedOrNot()}
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Like;
