import React from "react";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="HomePage">
      <h1>Welcome to the TTRPG Battle Map Simulator!</h1>
      <h2>
        With this app you can quickly build interactive maps to use during your
        TTRPG games, save them for later, and view maps others have made public.
      </h2>
      <h3>In-depth description below:</h3>

      <p>
        On the play screen it defaults in edit mode. While in edit mode you
        can save the map to the database, mark as a public or private map,
        adjust the number of columns or rows of the map, add objects to the map,
        and add, delete, or modify characters. All of this is done by clicking,
        and typing in the inputs.
      </p>
      <p>
        While in play-mode the characters will be sorted by their initiative.
        The current character’s movement speed remaining will display at the
        bottom based on the given movement speed. Movement will be taken from
        that number as the character moves across the board. To move characters
        use WASD to move laterally across rows/columns or QEZX to move
        diagonally across the stage. The first diagonal movement, and lateral
        movements will cost 5 move speed, the second diagonal move will cost 10.
        Characters will collide with walls, and movement speed will not be
        adjusted when the character does not move. Characters can also be moved
        by clicking on the board, movement speed will not be adjusted when moved
        in this way.
      </p>
      <p>
        On both the edit and play mode screens there is an option to resize the
        map on the screen to get the desired view.
      </p>
      <p>
        In the ‘public’ tab all saved maps marked as ‘public’ will display as
        well as the creator of said map. These maps can be chosen to be played
        upon. If the person who created that map is logged in, there is an
        option to delete the map.
      </p>
      <p>
        In the ‘saved’ tab all maps saved by the current user will display as
        well as the creator of said map. These maps can be chosen to be played
        upon and there is an option to delete the maps.
      </p>
    </div>
  );
}

export default HomePage;
