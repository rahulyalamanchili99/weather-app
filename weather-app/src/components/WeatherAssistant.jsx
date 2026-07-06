function WeatherAssistant({ weather }) {
  if (!weather) return null;

  const temp = weather.main.temp;
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;
  const condition = weather.weather[0].main;

  const tips = [];

  if (condition === "Rain") {
    tips.push("🌂 Carry an umbrella.");
  }

  if (condition === "Snow") {
    tips.push("🧥 Wear warm clothes.");
  }

  if (condition === "Thunderstorm") {
    tips.push("⚠ Avoid outdoor activities.");
  }

  if (temp > 35) {
    tips.push("🥵 Stay hydrated.");
    tips.push("🧴 Use sunscreen.");
  }

  if (temp < 15) {
    tips.push("🧥 Wear a jacket.");
  }

  if (humidity > 80) {
    tips.push("💧 High humidity today.");
  }

  if (wind > 10) {
    tips.push("💨 Strong winds expected.");
  }

  if (condition === "Clear") {
    tips.push("🏏 Great weather for outdoor games.");
  }

  if (tips.length === 0) {
    tips.push("✅ Weather conditions are normal.");
  }

  return (
    <div className="assistant-card">
      <h2>🤖 AI Weather Assistant</h2>

      {tips.map((tip, index) => (
        <p key={index}>{tip}</p>
      ))}
    </div>
  );
}

export default WeatherAssistant;