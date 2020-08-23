import React, { useState } from "react";
import { Image, FormControl } from "react-bootstrap";
import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch) => ({
  selectCity: (name) =>
    dispatch({
      type: "SELECT_CITY",
      payload: name,
    }),
});

function Navigation({ selectCity, history }) {
  const [showSearch, setShowSeach] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    if (showSearch) {
      if (searchValue.length > 0)
        if (e.key === "Enter") {
          selectCity(searchValue);
          history.push("/cities/info/");
        }
    } else {
      setShowSeach(!showSearch);
    }
  };

  const searchButton = () => {
    selectCity(searchValue);
    history.push("/cities/info");
  };

  return (
    <div className='nav-bar'>
      <Link to='/'>
        <Image id='logo' src='/assets/logo.png' alt='logo' />
      </Link>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cities'>Top 6 Cities</Link>
        </li>

        <li className={showSearch ? "search show" : "search hide"}>
          <FormControl
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
            onKeyDown={(e) => handleSearch(e)}
            id='searchField'
            className='mr-sm-2'
          />
        </li>
        <li>
          <FaSearchLocation
            onClick={() => {
              setShowSeach(!showSearch);
              searchValue.length && searchButton();
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(withRouter(Navigation));
