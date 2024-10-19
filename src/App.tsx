import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";
import Button from "./components/Button/Button";
import myImageDay from "./components/Images/lightMode.png";
import myImageNight from "./components/Images/half-moon.png";
import Navbar, { NavItem } from "./components/Navbar/Navbar";
import Darkmode from "./components/Darkmode/Darkmode";
import SetAttribute from "./components/SetAttribute/SetAttribute";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const [count, setCount] = useState<number>(0);
  const [darkMode, setDarkmode] = useState(0);
  const [category, setCategory] = useState("");

  const ref = useRef<HTMLButtonElement>(null);

  // after each  render  hook
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      document.title = "My React playground";
    }
  });

  const handleMode = () => {
    if (darkMode) {
      setDarkmode(0);
      document.body.style.backgroundColor = "#2a2a2a";
    } else {
      setDarkmode(1);
      document.body.style.backgroundColor = "#d9d9d9";
    }
  };

  const handleCount = (number: number) => {
    setCount((prevCount) => prevCount + number);
  };

  const handleReset = () => {
    setCount((currentCount) => (currentCount = 0));
    console.log("Reseted:", count);
  };

  return (
    <>
      <Navbar>
        <button ref={ref}>Menu</button>
        <NavItem icon="🎅🏻" />
        <NavItem icon="🥰" />
        <NavItem icon="😒" />
        <NavItem icon="😌" />
        <NavItem icon="🧐" />
      </Navbar>

      <div>
        <Darkmode
          onClick={handleMode}
          src={darkMode ? myImageDay : myImageNight}
          alt={darkMode ? "Light Mode" : "Dark Mode"}
        />
      </div>

      <SetAttribute current={count} perfect={43} />
      <div className="btn-group" role="group">
        <Button onClick={() => handleCount(-10)} color="warning">
          Count -10
        </Button>
        <Button onClick={() => handleCount(-1)} color="warning">
          Count -1
        </Button>
        <Button onClick={handleReset} disabled={count === 0} color="danger">
          Reset
        </Button>
        <Button onClick={() => handleCount(+1)} color="primary">
          Count +1
        </Button>
        <Button onClick={() => handleCount(+10)} color="primary">
          Count +10
        </Button>
      </div>
      <select
        title="categorySelector"
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
}

export default App;
