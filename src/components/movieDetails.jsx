import React, { Component } from "react";

class MovieDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h1>Movie Details {id}</h1>
        <button
          onClick={() => this.props.history.push("/movies")}
          className="btn btn-primary btn-sm"
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
