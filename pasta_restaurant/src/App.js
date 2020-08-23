import React from "react";
import { Navbar, MainPage, Menu } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route path='/' exact render={(props) => <MainPage {...props} />} />
        <Route path='/menu' exact render={(props) => <Menu {...props} />} />
      </div>
    </Router>
  );
}

export default App;
