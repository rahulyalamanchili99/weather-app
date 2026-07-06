function SunCard({ weather }) {
  if (!weather) return null;

  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="sun-card">
      <h2>🌅 Sun Information</h2>

      <div className="sun-grid">
        <div>
          <h3>🌄 Sunrise</h3>
          <p>{sunrise}</p>
        </div>

        <div>
          <h3>🌇 Sunset</h3>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default SunCard;