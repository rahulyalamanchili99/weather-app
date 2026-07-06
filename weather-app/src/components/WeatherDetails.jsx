function WeatherDetails({ weather }) {

    if (!weather) return null;

    const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();

    const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

    const today = new Date().toDateString();

    const time = new Date().toLocaleTimeString();

    return (

        <div className="details">

            <h3>Weather Details</h3>

            <p>📅 {today}</p>

            <p>🕒 {time}</p>

            <hr />

            <p>🌡️ Feels Like : {weather.main.feels_like}°C</p>

            <p>💧 Humidity : {weather.main.humidity}%</p>

            <p>💨 Wind : {weather.wind.speed} m/s</p>

            <p>🌍 Pressure : {weather.main.pressure} hPa</p>

            <p>👀 Visibility : {(weather.visibility / 1000).toFixed(1)} km</p>

            <p>🌅 Sunrise : {sunrise}</p>

            <p>🌇 Sunset : {sunset}</p>

        </div>

    );
}

export default WeatherDetails;