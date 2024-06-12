import { Avatar, Button, List } from "antd";
import { RightOutlined } from "@ant-design/icons";

import "./MovieList.scss";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies: { loading, result } }) => {
  if (loading || !result) {
    return "Cargando...";
  }

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
};

function RenderMovie({ movie: { id, title, poster_path } }) {
  const posterImagePath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={posterImagePath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />}></Button>
      </Link>
    </List.Item>
  );
}

export default MovieList;
