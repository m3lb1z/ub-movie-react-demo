import useFetch from "../../hooks/useFetch";
import { API, URL_API } from "../../utils/constants";
import { Button, Col, Row } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./movie.scss";
import ModalVideo from "../../components/ModalVideo/ModalVideo";
import { useState } from "react";

export default function Movie() {
  const { id: movieId } = useParams();

  const { result: movieInfo, loading } = useFetch(
    `${URL_API}/movie/${movieId}?api_key=${API}&language=es-ES&page=1`
  );

  if (loading && !movieInfo) {
    return "Cargando...";
  }

  return <RenderMovie movie={movieInfo} />;
}

function RenderMovie({ movie }) {
  const { backdrop_path, poster_path } = movie;
  const backgroundPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className="movie"
      style={{ backgroundImage: `url(${backgroundPath})` }}
    >
      <div className="movie__dark"></div>
      <Row>
        <Col span={8} offset={3} className="movie__poster">
          <PosterMovie image={poster_path} />
        </Col>
        <Col span={10} className="movie__info">
          <MovieInfo movie={movie} />
        </Col>
      </Row>
    </div>
  );
}

function PosterMovie({ image }) {
  const posterPath = `https://image.tmdb.org/t/p/original/${image}`;

  return <div style={{ backgroundImage: `url(${posterPath})` }}></div>;
}

function MovieInfo({ movie: { id, title, overview, release_date, genres } }) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const videoMovie = useFetch(
    `${URL_API}/movie/${id}/videos?api_key=${API}&language=es-ES`
  );

  const openModal = () => setIsVisibleModal(true);
  const closeModal = () => setIsVisibleModal(false);

  const renderVideo = () => {
    if (videoMovie.result) {
      if (videoMovie.result.results.length > 0) {
        return (
          <>
            <Button icon={<PlayCircleOutlined />} onClick={openModal}>
              Ver Trailer
            </Button>
            <ModalVideo
              videoKey={videoMovie.result.results[0].key}
              videoPlatform={videoMovie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </>
        );
      }
    }
  };
  return (
    <>
      <div className="movie__info-header">
        <h1>
          {title}{" "}
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        {renderVideo()}
      </div>
      <div className="movie__info-content">
        <h3>General</h3>
        <p>{overview}</p>
        <h3>Generos</h3>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
