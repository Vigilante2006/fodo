import React from "react";
import Cardlines from "./components/Cardlines";
import Hero from "./components/Hero";
import Navbar from './components/Navbar'
import Food from './components/Food'
import Category from "./components/Category";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cardlines />
      <Food />
      <Category />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
