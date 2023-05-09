# MadLib Madness

A website where you can pick from MadLib outlines by a topic and then you will fill in the word prompts with your own and have the story shown to you with your inputed words instead of the prompts. There is also a user MadLib gallery to see all of the other MadLibs people created and saved into the gallery.

## Tech Stack

- Javascript
- HTML
- CSS
- Express.js
- Axios
- Cors
- PostgreSQL
- Luxon
- RollBar
- Dotenv

## Features

- PostgreSQL database seeded so that is has all of the pre-written MadLib outlines, and also has the ability to store all of the user MadLibs created through Sequelize queries.

- The user word input is retrieved from the html document through a unique UI input system and then all of the words are appended to the final unique user MadLib, which is displayed at the end.

- Has GET and POST Axios requests and Express endpoints (utilizing Sequelize) for getting the MadLib outline, MadLib prompts, user-created MadLibs, and for posting saved MadLibs to the gallery.

- Has full-functioning scaling for different sized screens.

- Fully-functioning mobile site.

## Screenshots

[Here!](./Client/Images/Screenshots/)

<!-- ## Demo Video -->
