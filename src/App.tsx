import { BrowserRouter } from "react-router-dom";
// import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <main>
        <Hero />
      </main>
    </BrowserRouter>
  );
}

export default App;
