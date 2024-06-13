import { Row, Col, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constants";

import "./search.scss";
import { useEffect, useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const searchValue = query.get("s");

      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${searchValue}&page=1`
      );

      const movies = await response.json();
      setMovieList(movies);
      setSearchValue(searchValue);
    })();
  }, [useLocation().search]);

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const onKeyDownSearch = (event) => {
    if (event.keyCode === 13) {
      navigate(`?s=${searchValue}`);
    }
  };

  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu pelicula</h1>
        <Input value={searchValue} onKeyDown={onKeyDownSearch} onChange={onChangeSearch} />
      </Col>
      <Row>
        {movieList.results && (
          <Row>
            <MovieCatalog movies={movieList} />
          </Row>
        )}
      </Row>
    </Row>
  );
}

export default Search;
