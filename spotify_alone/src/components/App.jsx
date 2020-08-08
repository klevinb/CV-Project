import React from "react";
import { Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import AlbumPage from "./AlbumPage";
import ArtistPage from "./ArtistPage";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import Login from "./Login";
import { withRouter, Route } from "react-router-dom";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        {this.props.location.pathname !== "/" && (
          <Row className='m-0 app'>
            <NavigationBar />
            <Route path='/home' component={HomePage} />
            <Route path='/artist/:id' component={ArtistPage} />
            <Route path='/album/:id' component={AlbumPage} />
            <Route path='/search' component={SearchPage} />
          </Row>
        )}
        <Route path='/' exact component={Login} />
        {this.props.location.pathname !== "/" && (
          <Row className='m-0 footer'>
            <Footer />
          </Row>
        )}
      </>
    );
  }
}

export default withRouter(App);
