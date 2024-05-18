// import logo from './logo.svg';
import "./App.css";
import Buttons from "./Components/Buttons";
import Slider from "./Components/Slider";
import Pagination from "./Components/Pagination";
import SearchFilter from "./Components/SearchFilter";
import { useState } from "react";

function App() {
  const [buttonSelected, setButtonSelected] = useState(null);
  const handleClick = (button) => {
    setButtonSelected(button);
  };

  return (
    <div className="App">
      <Buttons onClick={handleClick} />
      {buttonSelected === "Slider" && <Slider />}
      {buttonSelected === "Pagination" && <Pagination />}
      {buttonSelected === "Search & Filter" && <SearchFilter />}
    </div>
  );
}

export default App;
