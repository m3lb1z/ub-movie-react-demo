import { Button, ConfigProvider, DatePicker, Space } from "antd";

export default function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#66b3fb" } }}>
      <div>
        <h1>Estamos en App.</h1>
      </div>
    </ConfigProvider>
  );
}
