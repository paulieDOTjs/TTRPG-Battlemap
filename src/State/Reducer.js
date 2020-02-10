import uuid from "uuid";

import {
  MOVE_CHARACTER,
  CREATE_MAP,
  SET_OBJECT,
  TOGGLE_EDIT_MODE,
  SELECT_OBJECT,
  SET_CHARACTER,
  END_TURN,
  SET_TURN,
  NO_ACTION,
  UPDATE_CHARACTER_INFO,
  DELETE_CHARACTER,
  ADD_CHARACTER,
  TOGGLE_PRIVATE_MAP
} from "./Actions";
import { tileMapDirectory } from "../Utils/tileMapDirectory";

export default function reducer(state, action) {
  // console.log(state);
  switch (action.type) {
    //Used for testing
    case NO_ACTION: {
      console.log("No action received");
      return { ...state };
    }

    case ADD_CHARACTER: {
      const defaultCharacterInfo = {
        name: "Player",
        characterID: uuid(),
        movespeed: "30",
        initiative: 0,
        color: "Black",
        position: {
          x: 1,
          y: 1
        }
      };
      const characters = [...state.characters];
      characters.push(defaultCharacterInfo);
      return {
        ...state,
        characters: characters,
        characterID: uuid()
      };
    }

    case DELETE_CHARACTER: {
      console.log("hi");
      const defaultCharacterInfo = {
        name: "Player",
        characterID: uuid(),
        movespeed: "30",
        initiative: 0,
        color: "Black",
        position: {
          x: 1,
          y: 1
        }
      };

      if (state.characters.length === 1) {
        return { ...state, characters: [defaultCharacterInfo] };
      }
      const characters = state.characters.filter(character => {
        return character.characterID !== action.payload.characterID;
      });

      console.log("i;m from the reducer", characters);

      return { ...state, characters: characters };
    }

    case UPDATE_CHARACTER_INFO: {
      let allCharacters = [...state.characters];

      let index;

      const character = allCharacters.filter((singleCharacter, i) => {
        index = i;
        return singleCharacter.characterID === action.payload.characterID;
      });

      character[0] = {
        name: action.payload.name,
        movespeed: action.payload.movespeed,
        initiative: action.payload.initiative,
        color: action.payload.color,
        position: action.payload.position
      };

      allCharacters[index] = character[0];

      // allCharacters.sort(function(a, b) {
      //   var characterA = parseInt(a.initiative);
      //   var characterB = parseInt(b.initiative);
      //   if (characterA < characterB) {
      //     return 1;
      //   }
      //   if (characterA > characterB) {
      //     return -1;
      //   }
      //   return 0;
      // });

      return {
        ...state,
        characters: allCharacters
        // movespeedRemaining: allCharacters[state.turn].movespeed
      };
    }

    case END_TURN: {
      let currentTurn = state.turn;
      if (currentTurn === state.characters.length - 1) {
        currentTurn = 0;
      } else {
        currentTurn++;
      }
      return {
        ...state,
        turn: currentTurn,
        movespeed: state.characters[currentTurn].movespeed,
        movespeedRemaining: state.characters[currentTurn].movespeed,
        diagMove: false
      };
    }

    case SET_TURN: {
      const currentTurn = state.turn;
      const clickedTurn = parseInt(action.payload.dataset.position);
      if (currentTurn === clickedTurn) {
        return { ...state };
      } else {
        return {
          ...state,
          turn: clickedTurn,
          movespeed: state.characters[clickedTurn].movespeed,
          movespeedRemaining: state.characters[clickedTurn].movespeed,
          diagMove: false
        };
      }
    }

    case SET_CHARACTER: {
      const clickedPosition = {
        x: action.payload.dataset.col,
        y: action.payload.dataset.row
      };
      const charactersArray = state.characters;
      charactersArray[state.turn].position = { ...clickedPosition };
      return { ...state, characters: charactersArray };
    }

    case SELECT_OBJECT: {
      return {
        ...state,
        selectedObject: action.payload.dataset.tiletype
      };
    }

    /*************************
     * This sets the currently
     * selected object to replace
     * something on the grid
     *************************/
    case SET_OBJECT: {
      //gets current tile map
      const newTileMap = [...state.tileMap];
      //gets the row number based on the tile clicked
      const changingRow = action.payload.dataset.row - 1;
      //gets the col number based on the tile clicked
      const changingCol = action.payload.dataset.col - 1;
      //A string of what the current row looks like from state
      const currentRow = state.tileMap[changingRow];

      //The character that is currently at that place in the tilemap/
      const currentObject = currentRow.charAt(changingCol);
      //The character in state that is currently wanting to replace what is in the tilemap.
      let selectedObject = state.selectedObject;
      if (parseInt(currentObject) === parseInt(selectedObject)) {
        selectedObject = tileMapDirectory[selectedObject].next;
      }

      //The new row with the changed string
      const newRow =
        currentRow.substring(0, changingCol) +
        selectedObject +
        currentRow.substring(changingCol + 1);

      //The new tileMap updated with the new row
      newTileMap[changingRow] = newRow;
      return {
        ...state,
        tileMap: newTileMap,
        selectedObject: selectedObject,
        saved: false
      };

      //Changes the game between play or edit mode
    }

    case TOGGLE_EDIT_MODE: {
      return { ...state, editMode: !state.editMode };
    }

    case TOGGLE_PRIVATE_MAP: {
      return { ...state, private: !state.private, saved: false };
    }
    //Creates the map based on state
    case CREATE_MAP: {
      //Temporary version of the tileMap
      let tileMapLocal = [...state.tileMap];

      //Shortens tileMap to be the new inputted value
      if (tileMapLocal[0].length > action.payload.x) {
        tileMapLocal.map((key, value) => {
          const x = key.slice(0, action.payload.x);
          tileMapLocal[value] = x;
        });
      }

      //Adds blank columns to the right of the current columns
      if (tileMapLocal[0].length < action.payload.x) {
        const newColumnNumber = action.payload.x - tileMapLocal[0].length;
        let additionalColumns = "";
        for (let i = 0; i < newColumnNumber; i++) {
          additionalColumns = additionalColumns + 0;
        }
        tileMapLocal.map((key, value) => {
          key = key + additionalColumns;
          tileMapLocal[value] = key;
        });
      }

      //Reduces the length of the array based the new incoming y
      if (tileMapLocal.length > action.payload.y) {
        tileMapLocal = tileMapLocal.slice(0, action.payload.y);
      }

      //Reduces the length of the array based the new incoming y
      if (tileMapLocal.length < action.payload.y) {
        let additionalColumns = "";

        for (let i = 0; i < action.payload.x; i++) {
          additionalColumns = additionalColumns + 0;
        }

        const rowDifference = action.payload.y - tileMapLocal.length;
        for (let i = 0; i < rowDifference; i++) {
          tileMapLocal.push(additionalColumns);
        }
      }

      //Console logs to make sure it did it right, it will be the tile map and the length of the row
      console.log(tileMapLocal);
      console.log(tileMapLocal[0].length);
      return {
        ...state,
        tileMap: tileMapLocal,
        dimensions: {
          x: action.payload.x,
          y: action.payload.y
        },
        saved: false
      };
    }

    case MOVE_CHARACTER: {
      if (state.editMode) {
        //If edit mode is on, characters cannot move
        return { ...state };
      }
      /********************************
       * This function keeps the player
       * inside the playable grid
       *********************************/
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

      //If the character has no remaining move speed they cannot move.
      if (movespeedRemaining < 5) {
        return { ...state };
      }

      //Pulls in current position from state to do some math on
      let newPosition = { ...characters[state.turn].position };

      if (
        action.payload === "KeyQ" ||
        action.payload === "KeyA" ||
        action.payload === "KeyZ"
      ) {
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
      if (
        action.payload === "KeyE" ||
        action.payload === "KeyD" ||
        action.payload === "KeyX"
      ) {
        try {
          let desiredTileValue = tileMap[newPosition.y - 1].charAt(
            newPosition.x
          );
          if (tileMapDirectory[desiredTileValue].passable) {
            newPosition.x++;
          }
          keepInGrid(newPosition);
        } catch {
          keepInGrid(newPosition);
        }
      }
      if (
        action.payload === "KeyS" ||
        action.payload === "KeyZ" ||
        action.payload === "KeyX"
      ) {
        try {
          let desiredTileValue = tileMap[newPosition.y].charAt(
            newPosition.x - 1
          );
          if (tileMapDirectory[desiredTileValue].passable) {
            newPosition.y++;
          }
          keepInGrid(newPosition);
        } catch {
          keepInGrid(newPosition);
        }
      }
      if (
        action.payload === "KeyQ" ||
        action.payload === "KeyW" ||
        action.payload === "KeyE"
      ) {
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
      if (
        newPosition.x !== characters[state.turn].position.x ||
        newPosition.y !== characters[state.turn].position.y
      ) {
        if (
          newPosition.x !== characters[state.turn].position.x &&
          newPosition.y !== characters[state.turn].position.y &&
          state.diagMove
        ) {
          movespeedRemaining = movespeedRemaining - 10;
          //If a diagonal move is attempted and it will take 10, but only 5 is remaining it will stop it.
          if (movespeedRemaining === -5) {
            return { ...state };
          }
          state.diagMove = false;
        } else {
          movespeedRemaining = movespeedRemaining - 5;
          state.diagMove = true;
        }
      }

      characters[state.turn].position = { ...newPosition };

      return {
        ...state,
        characters: characters,
        movespeedRemaining: movespeedRemaining
      };
    }
    default: {
      throw new Error("UNKOWN ACTION:", action.type);
    }
  }
}
