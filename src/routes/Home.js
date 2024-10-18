import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    currentPage: 1,  // Page state for pagination
    totalPages: 0,   // State to track the total number of pages
  };

  // Fetch movies based on the current page
  getMovies = async (page = 1) => {
    const {
      data: {
        data: { movies, movie_count },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=rating&limit=20&page=${page}`
    );

    const totalPages = Math.ceil(movie_count / 20); // Assuming 20 movies per page

    this.setState({
      movies,
      isLoading: false,
      totalPages,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  // Handle page change
  handlePageChange = (event, page) => {
    this.setState({ isLoading: true, currentPage: page }, () => {
      this.getMovies(page);  // Fetch movies for the new page
    });
  };

  render() {
    const { isLoading, movies, currentPage } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <>
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

            {/* Material-UI Pagination */}
            <div className="pagination">
              <Stack spacing={2}>
                <Pagination
                   count={10}                 // Show exactly 10 page numbers
                   page={currentPage}          // Current page
                   onChange={this.handlePageChange}  // Page change handler
                   shape="rounded"
                   siblingCount={9}            // Ensure 9 page numbers are shown around the current page
                   boundaryCount={0}           // No boundary ellipses
                   showFirstButton             // Optional: Show "First" button
                   showLastButton              // Optional: Show "Last" button
                />
              </Stack>
            </div>
          </>
        )}
      </section>
    );
  }
}

export default Home;
