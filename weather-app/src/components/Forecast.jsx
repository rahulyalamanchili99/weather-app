function Forecast({ forecast }) {

    if (!forecast) return null;

    return (

        <div className="forecast">

            <h2>5-Day Forecast</h2>

            <div className="forecast-grid">

                {forecast.list
                    .filter((item) => item.dt_txt.includes("12:00:00"))
                    .map((item) => (

                        <div className="forecast-card" key={item.dt}>

                            <h3>
                                {new Date(item.dt_txt).toLocaleDateString(
                                    "en-US",
                                    { weekday: "short" }
                                )}
                            </h3>

                            <img
                                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                alt=""
                            />

                            <h2>{Math.round(item.main.temp)}°C</h2>

                            <p>{item.weather[0].main}</p>

                        </div>

                    ))}

            </div>

        </div>

    );
}

export default Forecast;