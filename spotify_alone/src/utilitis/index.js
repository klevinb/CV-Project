import axios from "axios";
import Cookies from "js-cookie";

export const fetchArtistsWithThunk = () => {
  let albums = [];
  let albums2 = [];
  const artistsArray = [
    "stormzy",
    "skepta",
    "dave",
    "chip",
    "bugzy malone",
    "nadia rose",
  ];
  const usaArtists = [
    "adele",
    "dua lipa",
    "eminem",
    "drake",
    "kendrick lamar",
    "nicki minaj",
  ];
  return (dispatch, getState) => {
    let promises = [];
    let promises2 = [];
    artistsArray.forEach((artist) =>
      promises.push(
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443",
          },
        })
          .then((resp) => resp.json())
          .then((respObj) => albums.push(respObj.data[3]))
      )
    );
    usaArtists.forEach((artist) =>
      promises2.push(
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443",
          },
        })
          .then((resp) => resp.json())
          .then((respObj) => albums2.push(respObj.data[3]))
      )
    );
    Promise.all([...promises, ...promises2]).then(() =>
      dispatch({
        type: "FETCH_ARTISTS",
        payload: { uk: albums, usa: albums2 },
      })
    );
  };
};

export const fetchAlbumInfos = (id) => {
  return (dispatch, getState) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + id, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443",
      },
    })
      .then((res) => res.json())
      .then((respObj) =>
        dispatch({
          type: "FETCH_ALBUM_INFO",
          payload: respObj,
        })
      );
  };
};

export const selectSongThunk = (id) => {
  return (dispatch, getState) => {
    if (getState().loggedin === true) {
      dispatch({
        type: "SELECT_SONG",
        payload: id,
      });
    } else {
      alert("You need to log in");
    }
  };
};
export const selectSongFromSearch = (song) => {
  return (dispatch, getState) => {
    if (getState().loggedin === true) {
      dispatch({
        type: "PLAY_PREVIEW",
        payload: song,
      });
    } else {
      alert("You need to log in");
    }
  };
};

export const fetchArtistInfos = (id) => {
  return (dispatch, getState) => {
    axios(process.env.REACT_APP_API_URL + "/deezer/artitisInfo/" + id, {
      method: "GET",
      withCredentials: true,
    }).then((data) =>
      dispatch({
        type: "FETCH_ARTIST",
        payload: { artist: data.data[0], topSongs: data.data[1] },
      })
    );
  };
};
