import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating&limit=20"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                title_long={movie.title_long}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                poster_big={movie.large_cover_image}
                genres={movie.genres}
                rating={movie.rating}
                yt_code={movie.yt_trailer_code}
                runtime={movie.runtime}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
