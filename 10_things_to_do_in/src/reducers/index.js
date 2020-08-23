export default function (state = {}, action) {
  switch (action.type) {
    case "FETCH_CITY":
      return {
        ...state,
        cityInfo: action.payload,
        selectedVideo: action.payload.data.items[0],
      };
    case "SELECT_CITY":
      return {
        ...state,
        selectedCity: action.payload,
      };
    case "SELECT_VIDEO":
      return {
        ...state,
        selectedVideo: action.payload,
      };
    default:
      return state;
  }
}
