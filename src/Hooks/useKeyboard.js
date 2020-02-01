// import { useEffect, useContext } from "react";
// import { GameContext } from "../State/Context.js";

// export default function UseKeyboard(gameState, setGameState) {
//   // const { gameState, setGameState } = useContext(GameContext);

//   function keepInGrid(object) {
//     if (object.x < 1) {
//       object.x = 1;
//     }
//     if (object.y < 1) {
//       object.y = 1;
//     }
//     if (object.x > gameState.numberOfColumns) {
//       object.x = gameState.numberOfColumns;
//     }
//     if (object.y > gameState.numberOfRows) {
//       object.y = gameState.numberOfRows;
//     }
//     return object;
//   }

//   function handleKey(e) {
//     let newPosition = gameState.player1position;
//     if (e.code === "KeyQ" || e.code === "KeyA" || e.code === "KeyZ") {
//       newPosition.x--;
//       keepInGrid(newPosition);
//       setGameState({ ...gameState, player1position: newPosition });
//     }
//     if (e.code === "KeyE" || e.code === "KeyD" || e.code === "KeyX") {
//       newPosition.x++;
//       keepInGrid(newPosition);
//       setGameState({ ...gameState, player1position: newPosition });
//     }
//     if (e.code === "KeyS" || e.code === "KeyZ" || e.code === "KeyX") {
//       newPosition.y++;
//       keepInGrid(newPosition);
//       setGameState({ ...gameState, player1position: newPosition });
//     }
//     if (e.code === "KeyQ" || e.code === "KeyW" || e.code === "KeyE") {
//       newPosition.y--;
//       keepInGrid(newPosition);
//       setGameState({ ...gameState, player1position: newPosition });
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   });
// }
