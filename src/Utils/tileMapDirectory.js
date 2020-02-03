export const tileMapDirectory = {
  "0": {
    className: "default",
    next: "0",
    pseudoName: "Erase",
    passable: true
  },
  "1": { className: "hWall", next: "2", pseudoName: "Wall", passable: false },
  "2": { className: "vWall", next: "1", pseudoName: "Wall", passable: false },
  "3": {
    className: "trCornerWall",
    next: "4",
    pseudoName: "Corner",
    passable: false
  },
  "4": {
    className: "rdCornerWall",
    next: "5",
    pseudoName: "Corner",
    passable: false
  },
  "5": {
    className: "dlCornerWall",
    next: "6",
    pseudoName: "Corner",
    passable: false
  },
  "6": {
    className: "ltCornerWall",
    next: "3",
    pseudoName: "Corner",
    passable: false
  },
  "7": {
    className: "noLTWall",
    next: "8",
    pseudoName: "T-Wall",
    passable: false
  },
  "8": {
    className: "noTTWall",
    next: "9",
    pseudoName: "T-Wall",
    passable: false
  },
  "9": {
    className: "noRTWall",
    next: "Q",
    pseudoName: "T-Wall",
    passable: false
  },
  Q: { className: "noDTWall", next: "7", pseudoName: "T-Wall", passable: false }
};
