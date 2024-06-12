import { Link } from "react-router-dom";
import "./SliderMovies.scss";
import { Carousel, Button } from "antd";
import Loading from "../Loading";

const SliderMovies = ({ movies }) => {
  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;
  console.log(results);

  return (
    <Carousel autoplay className="slider-movies">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
};

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;

  const movieImagePath = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${movieImagePath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SliderMovies;
