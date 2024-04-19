import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOVIE_DETAILS from "../database/movies";

function MovieDetail() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const movieObject = MOVIE_DETAILS.movies.find(
    (movie) => movie.Title === params.movieName
  );

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <h3>{movieObject.Title}</h3>
      <h5>Released on : {movieObject.Released}</h5>
      <h5>Language: {movieObject.Language}</h5>
      <br />
      <button onClick={handleGoBack}>Go back to home</button>
    </div>
  );
}

export default MovieDetail;
