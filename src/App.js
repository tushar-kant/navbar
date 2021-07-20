import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Statewise from "./components/statewise/StateWise";

import { Switch, Route } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <>
      <Navbar />
      
    </>
  );
};

const About = () => {
  let time = new Date().toLocaleTimeString();
  const[ctime,setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);

  }
  setInterval(UpdateTime,1000)

  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>ttime </p>
        <h1> {time}</h1>
        
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Contact </h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
       
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;