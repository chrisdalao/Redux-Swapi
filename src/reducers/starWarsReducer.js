import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR
} from "../actions";
const initialState = {
  characters: [],
  error: "",
  fetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTER_START:
      return {
        ...state,
        error: "",
        fetching: true
      };
    case FETCH_CHARACTER_SUCCESS:
      console.log(action);
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case FETCH_CHARACTER_ERROR:
      return {
        ...state,
        fetching: false,
        error: "You have an error in Reducer!"
      };
    default:
      return state;
  }
};
