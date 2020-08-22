import React from "react";
import { Container } from "react-bootstrap";
import "./styles/App.scss";
import {
  Navigation,
  Footer,
  MainPage,
  TopCities,
  CityInfo,
} from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid className='mainPage'>
        <Navigation />
        <Route path='/' exact component={MainPage} />
        <Route path='/cities' exact component={TopCities} />
        <Route path='/cities/info' component={CityInfo} />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
