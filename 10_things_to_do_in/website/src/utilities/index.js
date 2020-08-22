import youtube from "./youtube";

export const cityInfoWithThunk = (selectedCity) => {
  return async (dispatch, getState) => {
    const resp = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 15,
        key: process.env.REACT_APP_YOUTUBE_APIKEY,
        q: "10 things to do in " + selectedCity,
      },
    });
    if (resp) {
      dispatch({
        type: "FETCH_CITY",
        payload: resp,
      });
    }
  };
};
