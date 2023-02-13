import React, { Component, createContext } from "react";

export const MovieContext = createContext();

export class MovieProvider extends Component {
  state = {
    movieData: [
      {
        id: 1,
        name: "Bandersnatch",
        price: "$10",
      },
      {
        id: 2,
        name: "Harry Potter",
        price: "$20",
      },
      {
        id: 3,
        name: "marvel series",
        price: "$30",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <MovieContext.Provider value={this.state.movieData}>
          {this.props.children}
        </MovieContext.Provider>
      </React.Fragment>
    );
  }
}
