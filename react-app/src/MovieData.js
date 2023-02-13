import React, { Component } from "react";
import { connect } from "react-redux";

class MovieData extends Component {
  render() {
    console.log(this.props.movieData);
    return <></>;
  }
}

const mapStateToProps = (state) => {
  return { movieData: state.movieData };
};

export default connect(mapStateToProps, null)(MovieData);
