import * as Actions from "../State/Actions";

import { tileMapDirectory } from "../Utils/tileMapDirectory";

function useHandleKey(passedState, e) {
  const state = { ...passedState };

  function keepInGrid(object) {
    if (object.x < 1) {
      object.x = 1;
    }
    if (object.y < 1) {
      object.y = 1;
    }
    if (object.x > state.numberOfCols) {
      object.x = state.numberOfCols;
    }
    if (object.y > state.numberOfRows) {
      object.y = state.numberOfRows;
    }
    return object;
  }

  //Pulls in the tile map from state
  const tileMap = state.tileMap;

  //Pulls in the current position of all characters
  const characters = state.characters;

  //Pulls in The movement speed remaining of the current character
  let movespeedRemaining = state.movespeedRemaining;

  //If it is not edit mode
  if (state.editMode) {
    return [null, state];
  }

  if (e.code === "Enter") {
    return [Actions.END_TURN, state];
  }

  //If the character has no remaining move speed they cannot move.
  if (movespeedRemaining < 5) {
    return [null, state];
  }

  //Pulls in current position from state to do some math on
  let newPosition = { ...characters[state.turn].position };

  if (e.code === "KeyQ" || e.code === "KeyA" || e.code === "KeyZ") {
    //Gets the value of the tile that the character is trying to move to
    try {
      let desiredTileValue = tileMap[newPosition.y - 1].charAt(
        newPosition.x - 2
      );

      //Checks the tileMapDirectory to see if it's a passable tile
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.x--;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  }
  if (e.code === "KeyE" || e.code === "KeyD" || e.code === "KeyX") {
    try {
      let desiredTileValue = tileMap[newPosition.y - 1].charAt(newPosition.x);
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.x++;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  }
  if (e.code === "KeyS" || e.code === "KeyZ" || e.code === "KeyX") {
    try {
      let desiredTileValue = tileMap[newPosition.y].charAt(newPosition.x - 1);
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.y++;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  }
  if (e.code === "KeyQ" || e.code === "KeyW" || e.code === "KeyE") {
    try {
      let desiredTileValue = tileMap[newPosition.y - 2].charAt(
        newPosition.x - 1
      );
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.y--;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  }

  /*******************************************************
  If the the x or y position is different change the move
  speed remaining to be -5. If the x AND y are different
  AND state.diagmove is true then set movement speed to be
  -10 and state.diagmove to be false. If x AND y are
  different BUT state.diagmove is false movement speed
  is -5. This makes it so every other time a diagonal
  movement is made 5 or 10 movement is used.
  *******************************************************/
  const pseudoState = { ...state };

  if (
    //If there has been any movement
    newPosition.x !== characters[state.turn].position.x ||
    newPosition.y !== characters[state.turn].position.y
  ) {
    if (
      //If there has been movement on both x anbd y and diagmove is true
      newPosition.x !== characters[state.turn].position.x &&
      newPosition.y !== characters[state.turn].position.y &&
      pseudoState.diagMove
    ) {
      movespeedRemaining = movespeedRemaining - 10;
      //If a diagonal move is attempted and it will take 10, but only 5 is remaining it will stop it.
      if (movespeedRemaining === -5) {
        return [null, state];
      }
      pseudoState.diagMove = false;
    } else if (
      newPosition.x !== characters[state.turn].position.x &&
      newPosition.y !== characters[state.turn].position.y &&
      !pseudoState.diagMove
    ) {
      movespeedRemaining = movespeedRemaining - 5;
      pseudoState.diagMove = true;
    } else {
      movespeedRemaining = movespeedRemaining - 5;
    }
  }

  characters[state.turn].position = { ...newPosition };
  state.movespeedRemaining = movespeedRemaining;
  state.diagMove = pseudoState.diagMove;

  return [Actions.MOVE_CHARACTER, state];
}

export default useHandleKey;
