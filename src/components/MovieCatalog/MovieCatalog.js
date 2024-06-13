import { Card, Col, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "./MovieCatalog.scss";
import { Link } from "react-router-dom";

const MovieCatalog = ({ movies: { results } }) => {
  return results.map((movie) => (
    <Col key={movie.id} span={6} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
};

function MovieCard({ movie }) {
  const { id, title, poster_path } = movie;
  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={posterPath} />}
        actions={[<EyeOutlined />]}
      >
        <Meta title={title}></Meta>
      </Card>
    </Link>
  );
}

export default MovieCatalog;
