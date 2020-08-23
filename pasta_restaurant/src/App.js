import React from "react";
import { Navbar, MainPage, Menu, AddReservation } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route path='/' exact render={(props) => <MainPage {...props} />} />
        <Route path='/menu' exact render={(props) => <Menu {...props} />} />
        <Route
          path='/reservation'
          exact
          render={(props) => <AddReservation {...props} />}
        />
      </div>
    </Router>
  );
}

export default App;
