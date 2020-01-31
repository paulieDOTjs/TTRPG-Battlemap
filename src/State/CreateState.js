export default function createState(overrides) {
  return {
    mapPosition: { left: 0, top: 0 },
    player1position: { x: 1, y: 1 },
    editMode: true,
    tileMap: [],
    numberOfCols: 32,
    numberOfRows: 32,
    ...overrides
  };
}
