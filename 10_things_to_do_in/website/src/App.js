import React from "react";
import { Container } from "react-bootstrap";
import "./styles/App.scss";
import { Navigation, Footer, MainPage, TopCountries } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Container fluid className='mainPage'>
        <Navigation />
        <Route path='/' exact component={MainPage} />
        <Route path='/cities' component={TopCountries} />
        <Footer />
      </Container>
    </Router>
  );
}
