import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispath) => ({
  fetchUser: () => dispath(fetchUserWithThunk()),
});

const fetchUserWithThunk = () => {
  return async (dispatch, getState) => {
    let resp = await fetch(
      "http://127.0.0.1:3003/students/5f048092fe69f636c44c7050"
    );
    if (resp.ok) {
      const data = await resp.json();
      dispatch({
        type: "ADD_USER",
        payload: data,
      });
    }
  };
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <>
        {console.log(this.props)}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
