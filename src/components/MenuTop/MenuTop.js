import "./MenuTop.scss";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MenuTop = () => {
  const navegacion = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navigateLink = (e) => {
    navegacion(e.key);
  };

  const items = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Ultimos lanzamientos",
      key: "/new-movies",
    },
    {
      label: "Populares",
      key: "/popular",
    },
    {
      label: "Buscador",
      key: "/search",
    },
  ];

  return (
    <>
      <div className="menu-top">
        {/* <div className="menu-top__logo">
          <Logo />
        </div> */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[currentPath]}
          onClick={navigateLink}
          style={{ lineHeight: "64px" }}
          items={items}
        />
      </div>
    </>
  );
};

export default MenuTop;
