function WeatherCard({ weather }) {

    if (!weather) return null;

    const icon = weather.weather[0].icon;

    const iconUrl =
        `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (

        <div className="weather-card">

            <h2>{weather.name}</h2>

            <h3>{weather.sys.country}</h3>

            <img
                src={iconUrl}
                alt="weather icon"
            />

            <h1>{Math.round(weather.main.temp)}°C</h1>

            <h3>{weather.weather[0].main}</h3>

            <p>{weather.weather[0].description}</p>

        </div>

    );
}

export default WeatherCard;