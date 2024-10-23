import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({
  title,
  year,
  summary,
  poster,
  poster_big,
  genres,
  rating,
  title_long,
  yt_code,
  runtime,
}) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: {
            year,
            title_long,
            summary,
            poster_big,
            genres,
            yt_code,
            rating,
            runtime,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <h5 className="movie__rating">
            {rating ? `⭐${rating}/10` : "⭐-/10"}
          </h5>
          <p className="movie__summary">
            {summary ? (
              summary.length > 180 ? (
                summary.slice(0, summary.lastIndexOf(" ", 180)) + "..."
              ) : (
                summary
              )
            ) : (
              <>
                Summary currently unavailable, <br />
                <span className="summary__null">updates coming soon...</span>
              </>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
  yt_code: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default Movie;
