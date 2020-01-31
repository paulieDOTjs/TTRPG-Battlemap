import {
  SET_OBJECT,
  SELECT_OBJECT,
  MOVE_CHARACTER,
  MOVE_BOARD,
  TOGGLE_EDIT_MODE
} from "./Actions";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_OBJECT:
      return console.log(SET_OBJECT);
    case SELECT_OBJECT:
      return console.log(SELECT_OBJECT);
    case MOVE_CHARACTER:
      return console.log(MOVE_CHARACTER);
    case MOVE_BOARD:
      return console.log(MOVE_BOARD);
    case TOGGLE_EDIT_MODE:
      return console.log(TOGGLE_EDIT_MODE);
    default:
      throw new Error("UNKOWN ACTION:", action.type);
  }
}
