import { BrowserRouter } from "react-router-dom";
// import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Reproduction from "./components/reproduction/Reproduction";
import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <Reproduction />
        <Promo />
        <About />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
