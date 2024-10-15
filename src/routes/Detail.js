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
      return (
        <div>
          <h2 className="movie__title_long">{location.state.title_long}</h2>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
