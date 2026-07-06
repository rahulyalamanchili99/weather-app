import { useEffect } from "react";

function Settings({
  darkMode,
  setDarkMode,

  tempUnit,
  setTempUnit,

  windUnit,
  setWindUnit,

  language,
  setLanguage,

  timeFormat,
  setTimeFormat,
}) {

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("tempUnit", tempUnit);
  }, [tempUnit]);

  useEffect(() => {
    localStorage.setItem("windUnit", windUnit);
  }, [windUnit]);

  useEffect(() => {
    localStorage.setItem("timeFormat", timeFormat);
  }, [timeFormat]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="settings-card">
      <h2>⚙ Settings</h2>

      {/* Temperature */}
      <div className="setting-row">
        <label>Temperature Unit</label>

        <select
          value={tempUnit}
          onChange={(e) => setTempUnit(e.target.value)}
        >
          <option value="metric">Celsius (°C)</option>
          <option value="imperial">Fahrenheit (°F)</option>
        </select>
      </div>

      {/* Wind */}
      <div className="setting-row">
        <label>Wind Speed Unit</label>

        <select
          value={windUnit}
          onChange={(e) => setWindUnit(e.target.value)}
        >
          <option value="m/s">Meters/sec (m/s)</option>
          <option value="km/h">Kilometers/hour (km/h)</option>
          <option value="mph">Miles/hour (mph)</option>
        </select>
      </div>

      {/* Time */}
      <div className="setting-row">
        <label>Time Format</label>

        <select
          value={timeFormat}
          onChange={(e) => setTimeFormat(e.target.value)}
        >
          <option value="12">12 Hour</option>
          <option value="24">24 Hour</option>
        </select>
      </div>

      {/* Language */}
      <div className="setting-row">
        <label>Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      {/* Dark Mode */}
      <button
        className="dark-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Settings;