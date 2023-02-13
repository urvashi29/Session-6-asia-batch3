import React from "react";

const DisplayMovie = ({ movieData }) => {
  const movieList = movieData.map((movie) => {
    return (
      <React.Fragment key={movie.id}>
        <p>{movie.name}</p>
        <p>{movie.price}</p>
      </React.Fragment>
    );
  });
  
  return <>{movieList}</>;
};

export default DisplayMovie;
