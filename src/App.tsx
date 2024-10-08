import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Button from "./components/Button/Button";
import myImageDay from "./components/Images/lightMode.png";
import myImageNight from "./components/Images/darkMode.png";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const [count, setCount] = useState<number>(0);
  const [darkMode, setDarkmode] = useState(0);

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
    console.log(
      "Clicked times: ",
      { count },
      "and the total count is: ",
      count + number
    );
  };

  const handleReset = () => {
    setCount((currentCount) => (currentCount = 0));
    console.log("Reseted:", count);
  };

  return (
    <>
      {darkMode ? (
        <div>
          <button className="darkMode fadeIn" onClick={handleMode}>
            <img
              className="darkMode fadeIn"
              src={myImageDay}
              alt="Light Mode"
            />
          </button>
        </div>
      ) : (
        <button className="darkMode fadeIn" onClick={handleMode}>
          <img className="darkMode fadeIn" src={myImageNight} alt="Dark Mode" />
        </button>
      )}

      <div className="countTotal">
        &nbsp;Total Count: {count} (Suggested: 43)
        {count === 43 ? (
          <em className="circleSuggestions">•Perfect😊</em>
        ) : count > 43 ? (
          <em className="circleSuggestions">•Reduce by: {count - 43}</em>
        ) : (
          <em className="circleSuggestions">•Increase by: {43 - count}</em>
        )}
      </div>
      <div className="btn-group" role="group">
        <Button onClick={() => handleCount(-10)} color="warning">
          Count -10
        </Button>
        <Button onClick={() => handleCount(-1)} color="warning">
          Count -1
        </Button>
      </div>
      <Button onClick={handleReset} disabled={count === 0} color="danger">
        Reset
      </Button>
      <div className="btn-group" role="group">
        <Button onClick={() => handleCount(+1)} color="primary">
          Count +1
        </Button>
        <Button onClick={() => handleCount(+10)} color="primary">
          Count +10
        </Button>
      </div>
    </>
  );
}

export default App;
