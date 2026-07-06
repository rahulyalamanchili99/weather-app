import { FaMicrophone } from "react-icons/fa";

function VoiceSearch({ onSearch }) {
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onstart = () => {
      console.log("🎤 Listening...");
    };

    recognition.onresult = (event) => {
  let text = event.results[0][0].transcript;

  console.log("Original:", text);

  text = text
    .replace(/[.,!?]/g, "") // Remove punctuation
    .toLowerCase();

  let city = text
    .replace("weather in", "")
    .replace("show weather in", "")
    .replace("show me weather in", "")
    .replace("what is the weather in", "")
    .replace("weather", "")
    .trim();

  // Capitalize words
  city = city
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  console.log("Searching:", city);

  onSearch(city);
};

    recognition.onerror = (event) => {
      console.error("Speech Error:", event.error);

      switch (event.error) {
        case "not-allowed":
          alert("Microphone permission denied.");
          break;

        case "no-speech":
          alert("No speech detected. Please try again.");
          break;

        case "audio-capture":
          alert("No microphone found.");
          break;

        default:
          alert("Voice recognition error: " + event.error);
      }
    };

    recognition.onend = () => {
      console.log("🎤 Recognition ended");
    };
  };

  return (
    <button
      className="voice-btn"
      onClick={startListening}
    >
      <FaMicrophone />
    </button>
  );
}

export default VoiceSearch;