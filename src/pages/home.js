import { Col, Row } from "antd";
import SliderMovies from "../components/SliderMovies";
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constants";
import MovieList from "../components/MovieList";

export default function Home() {
  // const newMovies = useFetch(
  //   "https://api.themoviedb.org/3/movie/popular?api_key=f205496d9b63f41b692025988a1c7203"
  // );

  // console.log(movies);
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );

  const rankeadasMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Peliculas Populares" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList
            title="Top Mejores Peliculas Puntuadas"
            movies={rankeadasMovies}
          />
        </Col>
      </Row>
    </>
  );
}
