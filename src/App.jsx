import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  );
};

export default App;
