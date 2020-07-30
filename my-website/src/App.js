import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Route path='/' exact component={MainPage} />
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/contact' exact component={Contact} />
        </Router>
      </>
    );
  }
}

export default App;
