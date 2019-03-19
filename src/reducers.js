import { ADD_COMMENT } from "./constants";
import { ADD_NAME } from "./constants";
import { CHANGE_RATING } from "./constants";

const initialState = {
  comments: [{id: 1, comment:"It's a beautiful day", rating: 5}, {id: 2, comment: "spring is just around the corner", rating: 4}, {id: 3, comment: "get out of my way", rating: 2}, {id: 4, comment: "you stink", rating: 1}],
  name: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_COMMENT) {
    return Object.assign({}, state, {
      comments: state.comments.concat(action.payload.e)
    });
  }
  if (action.type === ADD_NAME) {
    return Object.assign({}, state, {
        name: action.payload.name
    })
  }
  if (action.type === CHANGE_RATING) {
      const copyArray = state.comments.slice(0)
      copyArray[action.payload.id - 1].rating = action.payload.rating
      return Object.assign({}, state, {
        comments: copyArray
      });
  }

  return state;
}

export default rootReducer;