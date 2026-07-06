export function getBackground(weather, icon) {
  switch (weather) {
    case "Clear":
      return "/backgrounds/sunny.webp";

    case "Clouds":
      return "/backgrounds/cloudy.webp";

    case "Rain":
      return "/backgrounds/rainy.webp";

    case "Snow":
      return "/backgrounds/snow.webp";

    case "Mist":
    case "Fog":
      return "/backgrounds/mist.webp";

    default:
      return icon.includes("n")
        ? "/backgrounds/night.webp"
        : "/backgrounds/sunny.webp";
  }
}