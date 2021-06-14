import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import DayDetails from "./components/DayDetails/DayDetails";
import { WeatherProvider } from "./components/WeatherContext/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <img
          className="bg-image"
          src="https://source.unsplash.com/L95xDkSSuWw/1600x900"
        />
        <SearchBar />
        <WeatherDetails />
        <Forecast />
        <DayDetails />
      </div>
    </WeatherProvider>
  );
}

export default App;
