import React from "react";
import card from "./components/cards";
import Navbar from "./components/navbar";
import { Myprofile } from "./components/cards";
const App = () => {
  return (
    <div>
      {card()}
      <Myprofile/>
      <Navbar />
    </div>
  );
};

export default App;