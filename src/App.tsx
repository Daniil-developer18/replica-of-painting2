import { BrowserRouter } from "react-router-dom";
// import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Reproduction from "./components/reproduction/Reproduction";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <main>
        <Hero />
        <Reproduction />
      </main>
    </BrowserRouter>
  );
}

export default App;
