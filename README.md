# TTRPG-Battlemap

Live site found here: https://ttrpg-battlemap.netlify.com/

# Description
With this app you can quickly build interactive maps to use during your TTRPGs (table-top roleplaying games), save them for later, and view maps others have made public. This app will keep track of the initiative, move speed, and location of all characters for your TTRPG. 

# Live App
 https://ttrpg-battlemap.netlify.com/

# Images
Coming soon

# Installation
If run locally NPM install should be run, NPM start should be run after. The app uses React so it will autolaunch on port 3000, if it is occupied it will prompt to run on another one. The app also requires the use of the app back-end-TTRPG which can be found here: https://github.com/paulrobhendrickson/back-end-TTRPG. 

# Usage
On the play screen it defaults in edit mode. While in edit mode the user can save the map to the database, mark as a public or private map, adjust the number of columns or rows of the map, add objects to the map, and add, delete, or modify characters. 

While in play-mode the characters will be sorted by their initiative. The current character’s movement speed remaining will display at the bottom based on the given movement speed. Movement will be taken from that number as the character moves across the board.  To move characters use WASD to move laterally across rows/columns or QEZX to move diagonally across the stage. The first diagonal movement, and lateral movements will cost 5 move speed, the second diagonal move will cost 10. Characters will collide with walls, and movement speed will not be adjusted when the character does not move. Characters can also be moved by clicking on the board, movement speed will not be adjusted when moved in this way.

 On both the edit and play mode screens there is an option to resize the map on the screen to get the desired view.

In the ‘public’ tab all saved maps marked as ‘public’ will display as well as the creator of said map. These maps can be chosen to be played upon. If the person who created that map is logged in,  there is an option to delete the map.

In the ‘saved’ tab all maps saved by the current user will display as well as the creator of said map. These maps can be chosen to be played upon and there is an option to delete the maps.

# Credits
Thank you to Brian Bartholomew for creating the MERN Template repository on his GitHub found here: https://github.com/bcbrian/mern-template that was the basis of the backend login system of the app. Credit to Jake O’Toole for the format of this readme.


# Contributing
Thank you to Brian Bartholomew for creating the MERN Template repository on his GitHub found here: https://github.com/bcbrian/mern-template that was the basis of the backend login system of the app. Credit to Jake O’Toole for the format of this readme.


# Challenges
I’m just gonna say ‘so many’

# License
MIT
