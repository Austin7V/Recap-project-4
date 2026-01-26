import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {/* Color-Komponent gebe ich genau Ein Farbobjekt als Prop mit. */}
      <Color color={initialColors[7]} />
    </>
  );
}

export default App;
