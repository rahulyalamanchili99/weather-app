function AirQuality({ air }) {
  if (!air) return null;

  const data = air.list[0];

  const aqi = data.main.aqi;

  const quality = [
    "",
    "Good 😊",
    "Fair 🙂",
    "Moderate 😐",
    "Poor 😷",
    "Very Poor ☠️",
  ];

  return (
    <div className="air-card">
      <h2>🌫 Air Quality</h2>

      <h3>{quality[aqi]}</h3>

      <p>PM2.5 : {data.components.pm2_5}</p>

      <p>PM10 : {data.components.pm10}</p>

      <p>CO : {data.components.co}</p>

      <p>NO₂ : {data.components.no2}</p>

      <p>O₃ : {data.components.o3}</p>

      <p>SO₂ : {data.components.so2}</p>
    </div>
  );
}

export default AirQuality;