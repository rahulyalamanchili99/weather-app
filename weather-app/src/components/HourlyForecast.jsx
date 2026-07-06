function HourlyForecast({ forecast }) {
  if (!forecast) return null;

  const hourly = forecast.list.slice(0, 8);

  return (
    <div className="hourly-container">
      <h2>🕒 Hourly Forecast</h2>

      <div className="hourly-grid">
        {hourly.map((item) => (
          <div key={item.dt} className="hour-card">
            <p>
              {new Date(item.dt * 1000).toLocaleTimeString([], {
                hour: "numeric",
              })}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />

            <h3>{Math.round(item.main.temp)}°C</h3>

            <p>{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;