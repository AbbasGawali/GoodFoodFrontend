import "./App.css";
import YourMind from "./components/YourMind";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="px-8">
      <YourMind />
      <MainComponent />
    </div>
  );
}

export default App;
