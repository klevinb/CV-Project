import React, { useEffect } from "react";
import { connect } from "react-redux";
import { cityInfoWithThunk } from "../utilities";
import { VideoDisplay } from "../components";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchCityInfo: (selectedCity) => dispatch(cityInfoWithThunk(selectedCity)),
});

function CityInfo(props) {
  useEffect(() => {
    props.fetchCityInfo(props.selectedCity);
  }, [props.selectedCity]);
  return <VideoDisplay />;
}

export default connect(mapStateToProps, mapDispatchToProps)(CityInfo);
