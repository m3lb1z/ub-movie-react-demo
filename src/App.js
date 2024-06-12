import { ConfigProvider, Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Movie from "./pages/movie";
import Error404 from "./pages/error404";
import MenuTop from "./components/MenuTop";

export default function App() {
  const { Header, Content } = Layout;

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#66b3fb" } }}>
      <Layout>
        <BrowserRouter>
          <Header>
            <MenuTop />
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new-movies" element={<NewMovies />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Content>
        </BrowserRouter>
      </Layout>
    </ConfigProvider>
  );
}
