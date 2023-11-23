import { useState } from "react";
import "./App.css";
import AllGuns from "./components/AllGuns/AllGuns";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCout] = useState(0);

  const countIncrease = () => {
    setCout(count + 1);
  };

  return (
    <div>
      <Navbar count={count} />
      <AllGuns countIncrease={countIncrease} />
    </div>
  );
}

export default App;
