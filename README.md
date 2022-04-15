# Well-Versed
### Licensing:
  [![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)

  [Click here to play the "Well-Versed" game!](https://well-versed-game.herokuapp.com/)

  ## ![start button](wvStart.png) 
  ## ![screenshot](wvs1.png) 
  ## ![screenshot](wvs2.png) 
  ## ![screenshot](wvs3.png) 

  # Table of Contents: 
  - [Description](#description)
  - [Technology](#technology)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)

  # Description:
  This is a single page game app that quizzes users about popular songs from a curated database of lyrics.  Users can create an account to allow access to a game customized to give one extra point to users who correclty match the title and artist of songs released 30 years after or 5 years prior to their birth year.   
  # Technology:
  React, MongoDB, Mongoose, Node.js, Express.js
  # Installation: 
  This application is deployed with Heroku. You can find it here: [well-versed game](https://well-versed-game.herokuapp.com/)

  If you would like to work with the code on you local host: 
  1. Clone the repository by opening your terminal and typing 	
  `git clone git@github.com:tripledawg/well-versed.git`.  
  2. Open a terminal at the root level. 
  3. Run `npm run seed` to seed the data.  
  4. Run 'npm start' to start the server.   
  5. Navigate to the game-client directory in your terminal. 
  6. Run `npm install` to install necessary node.js dependencies.  
  7. Run 'npm start' to start the React application. 
  # Usage: 
  When users click 'Start a game' they are taken to a page with a randomly generated song lyric displayed and 5 randomly generated multiple choice title and artist answers. Users select the answer and click submit until the 5th question is reached.  Then the user's score is displayed.  They are then prompted to play again as a guest or sign up for custom games by creating a user account. If the user creates a custom account, they are then presented with a game that gives them bonus points for correct answers about songs released five or more years prior to their birth or 30 years after their birth year.    
  # License: 
  https://opensource.org/licenses/MIT 
  # Questions: 
  lmc@uga.edu
  
  <https://github.com/tripledawg>