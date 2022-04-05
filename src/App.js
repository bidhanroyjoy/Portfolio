import React from "react";
import "./App.css";
import {
  Navbar,
  Intro,
  Services,
  Experience,
  Works,
  Portfolio,
  Testimonial,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div
      className="App"
      // style={{
      //   background: darkMode ? "black" : "",
      //   color: darkMode ? "white" : "",
      // }}
    >
      <Navbar />
      <Intro />
      <Portfolio />
      <Services />
      <Experience />
      <Works />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
