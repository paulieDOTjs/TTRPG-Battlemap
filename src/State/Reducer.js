import {
  MOVE_CHARACTER,
  CREATE_MAP,
  SET_OBJECT,
  TOGGLE_EDIT_MODE,
  SELECT_OBJECT
} from "./Actions";

export default function reducer(state, action) {
  // console.log(state);
  switch (action.type) {
    case MOVE_CHARACTER:
      return { ...state, player1position: action.payload };

    case SELECT_OBJECT:
      const newSelectedObject = action.payload.target.dataset.tiletype;
      console.log(newSelectedObject);
      return {
        ...state,
        selectedObject: action.payload.target.dataset.tiletype
      };

    /*************************
     * This sets the currently
     * selected object to replace
     * something on the grid
     *************************/
    case SET_OBJECT:
      // console.log(action.payload);
      //gets current tile map
      const newTileMap = [...state.tileMap];
      //gets the row based on the tile clicked
      const changingRow = action.payload.target.dataset.row - 1;
      //gets the col based on the tile clicked
      const changingCol = action.payload.target.dataset.col - 1;
      //A string of what the current row looks like
      const currentRow = state.tileMap[changingRow];
      //The character that it is changing to.
      const selectedObject = state.selectedObject;
      //The new row with the changed string
      const newRow =
        currentRow.substring(0, changingCol) +
        selectedObject +
        currentRow.substring(changingCol + 1);
      //The new tileMap updated with the new row
      newTileMap[changingRow] = newRow;
      return { ...state, tileMap: newTileMap };

    //Changes the game between play or edit mode
    case TOGGLE_EDIT_MODE:
      return { ...state, editMode: !state.editMode };

    //Creates the map based on stae
    case CREATE_MAP:
      //Temporary version of the tileMap
      const tileMapLocal = [];
      //Temporary version of what a row in the tile map looks like
      const tileMapRow = [];

      //Based on the number of columns it pushes a "0" into the row
      for (let i = 0; i < state.numberOfCols; i++) {
        tileMapRow.push("0");
      }

      //Based on the number of rows it pushes a row of 0s into the map
      for (let i = 0; i < state.numberOfRows; i++) {
        tileMapLocal.push(tileMapRow.join(""));
      }

      //Console logs to make sure it did it right, it will be the tile map and the length of the row
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
