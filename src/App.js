import { Button, ConfigProvider, DatePicker, Space } from "antd";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#66b3fb" } }}>
      <h1>Estamos en App.</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
      </Space>
    </ConfigProvider>
  );
}

export default App;
