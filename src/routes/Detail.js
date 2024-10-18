import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;

    if (location.state) {
      const {
        title_long,
        poster_big,
        summary,
        year,
        yt_code,
        rating,
        runtime,
        genres,
      } = location.state;

      return (
        <div className="detail__container">
          <div className="movie__poster_container">
            <img
              src={poster_big}
              alt={title_long}
              title={title_long}
              className="movie__poster"
            />
            <div className="movie__rating_poster">
              {rating ? `⭐${rating}` : "⭐-"}
            </div>
          </div>
          <div className="movie__content">
            <h2 className="movie__title_long">{title_long}</h2>
            <div className="movie__info_detail">
              <span className="movie__rating_sub">
                {rating ? `⭐${rating}/10` : "⭐-/10"}
              </span>
              <span className="movie__separator">▪</span>
              <span className="movie__year_sub">{year}</span>
              <span className="movie__separator">▪</span>
              <span className="movie__runtime">{runtime} min</span>
              <span className="movie__separator">▪</span>
              <span className="movie__genres_sub">{genres.join(" / ")}</span>
            </div>

            {/* Summary with scrolling */}
            <div className="movie__summary_container">
              {summary || "Summary currently unavailable, updates coming soon..."}
            </div>

            <h3 className="trailer__title">Trailer</h3>
            <iframe
              className="movie__yt_code"
              src={`https://www.youtube.com/embed/${yt_code}`}
              title={`Trailer for ${title_long}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
