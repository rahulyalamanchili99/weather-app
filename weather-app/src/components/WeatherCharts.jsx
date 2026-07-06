import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function WeatherCharts({ forecast }) {
  if (!forecast) return null;

  const chartData = forecast.list.slice(0, 8).map((item) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], {
      hour: "numeric",
    }),
    temp: Math.round(item.main.temp),
    humidity: item.main.humidity,
    wind: item.wind.speed,
    pressure: item.main.pressure,
  }));

  return (
    <div className="chart-container">
      <h2>📈 Weather Analytics</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#ff5722"
            name="Temperature"
          />

          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#2196f3"
            name="Humidity"
          />

          <Line
            type="monotone"
            dataKey="wind"
            stroke="#4caf50"
            name="Wind"
          />

          <Line
            type="monotone"
            dataKey="pressure"
            stroke="#9c27b0"
            name="Pressure"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeatherCharts;