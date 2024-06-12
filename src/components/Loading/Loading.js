import { Spin } from "antd";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <Spin size="large" />
      <p>Cargando...</p>
    </div>
  );
};

export default Loading;
