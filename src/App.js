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
  Specializing,
  Qualification,
  Achievement,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Portfolio />
      <Specializing />
      <Qualification />
      <Achievement />

      <Footer />
    </div>
  );
}

export default App;
