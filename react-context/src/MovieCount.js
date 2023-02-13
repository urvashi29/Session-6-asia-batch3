import React, { useContext } from "react";
import { MovieContext } from "./MovieProvider";

const MovieCount = () => {
  const data = useContext(MovieContext);
  console.log(data);

  return <div>Count: {data.length}</div>;
};

export default MovieCount;
