import {
  MOVE_CHARACTER,
  CREATE_MAP,
  SET_OBJECT,
  TOGGLE_EDIT_MODE
} from "./Actions";

export default function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case MOVE_CHARACTER:
      return { ...state, player1position: action.payload };
    case SET_OBJECT:
      console.log(action.payload);
      return { ...state };
    case TOGGLE_EDIT_MODE:
      return { ...state, editMode: !state.editMode };
    case CREATE_MAP:
      const tileMapLocal = [];
      const tileMapCol = [];
      for (let i = 0; i < state.numberOfCols; i++) {
        tileMapCol.push("0");
      }
      for (let i = 0; i < state.numberOfRows; i++) {
        tileMapLocal.push(tileMapCol.join(""));
      }
      console.log(tileMapLocal);
      console.log(tileMapLocal[0].length);
      return {
        ...state,
        tileMap: tileMapLocal
      };
    default:
      throw new Error("UNKOWN ACTION:", action.type);
  }
}
