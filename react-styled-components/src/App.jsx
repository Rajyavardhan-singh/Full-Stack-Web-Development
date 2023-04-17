import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { StyledButton } from './Button/Button.styles'
import StyledButton from "./Button/button";
import { FancyButton } from "./Button/Button.styles";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StyledButton>Click here</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="bg-white">Do Not click</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton>click here</FancyButton>

    </div>
  );
}

export default App;
