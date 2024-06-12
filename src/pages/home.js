import SliderMovies from "../components/SliderMovies";
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constants";

export default function Home() {
  // const newMovies = useFetch(
  //   "https://api.themoviedb.org/3/movie/popular?api_key=f205496d9b63f41b692025988a1c7203"
  // );

  // console.log(movies);
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
    </>
  );
}
