import React, { Component } from "react";
import DisplayMovie from "./DisplayMovie";
import { MovieContext } from "./MovieProvider";

class MovieData extends Component {
  static contextType = MovieContext;
  // state = {
  //   movieData: [
  //     {
  //       id: 1,
  //       name: "Bandersnatch",
  //       price: "$10",
  //     },
  //     {
  //       id: 2,
  //       name: "Harry Potter",
  //       price: "$20",
  //     },
  //     {
  //       id: 3,
  //       name: "marvel series",
  //       price: "$30",
  //     },
  //   ],
  // };

  render() {
    console.log(this.context);

    return (
      <>
        <DisplayMovie movieData={this.context} />
      </>
    );
  }
}

export default MovieData;
