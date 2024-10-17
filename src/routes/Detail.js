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
      const { title_long, poster, yt_code } = location.state;
      return (
        <div>
          <h2 className="movie__title_long">{title_long}</h2>
          <img
            src={poster}
            alt={title_long}
            title={title_long}
          />
          <br/>
          <iframe className="movie__yt_code"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${yt_code}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
