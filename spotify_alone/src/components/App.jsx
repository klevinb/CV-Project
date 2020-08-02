import React from "react";
import { Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import AlbumPage from "./AlbumPage";
import ArtistPage from "./ArtistPage";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { withRouter, Route } from "react-router-dom";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        {this.props.location.pathname !== "/login" && (
          <Row className='m-0 app'>
            <NavigationBar />
            <Route path='/home' exact component={HomePage} />
            <Route path='/artist/:id' exact component={ArtistPage} />
            <Route path='/album/:id' exact component={AlbumPage} />
            <Route path='/search' exact component={SearchPage} />
          </Row>
        )}
        {this.props.location.pathname !== "/login" && (
          <Row className='m-0 footer'>
            <Footer />
          </Row>
        )}
      </>
    );
  }
}

export default withRouter(App);
