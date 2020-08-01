import React from "react";
import { Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import AlbumPage from "./AlbumPage";
import ArtistPage from "./ArtistPage";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <Row className='m-0'>
            <NavigationBar />
            <Route path='/' exact component={HomePage} />
            <Route path='/artist' exact component={ArtistPage} />
            <Route path='/album' exact component={AlbumPage} />
            <Route path='/search' exact component={SearchPage} />
          </Row>
          <Row className='m-0 footer'>
            <Footer />
          </Row>
        </Router>
      </>
    );
  }
}

export default App;
