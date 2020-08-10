import React from "react";
import { Row } from "react-bootstrap";
import NavigationBar from "./components/navigation_footer/NavigationBar";
import Footer from "./components/navigation_footer/Footer";
import AlbumPage from "./components/detailsPage/AlbumPage";
import ArtistPage from "./components/detailsPage/ArtistPage";
import HomePage from "./components/detailsPage/HomePage";
import SearchPage from "./components/detailsPage/SearchPage";
import Login from "./components/authorization/Login";
import { withRouter, Route } from "react-router-dom";
import Library from "./components/detailsPage/Library";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        {this.props.location.pathname !== "/login" && (
          <Row className='m-0 app'>
            <NavigationBar />
            <Route path='/' exact component={HomePage} />
            <Route path='/artist/:id' component={ArtistPage} />
            <Route path='/album/:id' component={AlbumPage} />
            <Route path='/search' component={SearchPage} />
            <Route path='/library' component={Library} />
          </Row>
        )}
        <Route path='/login' exact component={Login} />
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
