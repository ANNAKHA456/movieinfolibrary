import React from "react";
import "./HomePage.css";
import MOVIE_DETAILS from "../database/movies";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="movies-list-container">
      <div className="header-title">Movies list</div>
      <div className="movies-list">
        {MOVIE_DETAILS.movies.map((movie) => (
          <div key={movie.Title} className="movie-card">
            <Link to={`/details/${movie.Title}`}>
              <h3 className="movie-title">{movie.Title}</h3>
            </Link>
            <img src={movie.Poster} height={300} width={180} alt="poster" className="poster"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
