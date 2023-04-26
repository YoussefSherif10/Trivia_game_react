# Trivia game

This is a simple React project where I used that API: https://opentdb.com/api.php?amount=1 to get a question and the answer to that question, The application has a simple form that is composed of just one input where the user can enter the answer. This answer is then compared with the correct answer from the API to show the user whether the entered answer is correct or not, if not it shows the correct answer.

Some of the questions may have multiple choices so there is a div that gets rendered only in case of multiple choice questions.

each functionality in this application has its dedicated component which makes the application modular and enhances the reusability of some features.

The API call is handled in the useEffect life cycle hook which is used to handle the side tasks for the component

## Application In Action

![](https://github.com/YoussefSherif10/Trivia_game_react/blob/main/Screenshot%202023-04-26%20at%204.43.48%20PM.png?raw=true)

![](https://github.com/YoussefSherif10/Trivia_game_react/blob/main/Screenshot%202023-04-26%20at%204.44.11%20PM.png?raw=true)

![](https://github.com/YoussefSherif10/Trivia_game_react/blob/main/Screenshot%202023-04-26%20at%204.44.34%20PM.png?raw=true)

![](https://github.com/YoussefSherif10/Trivia_game_react/blob/main/Screenshot%202023-04-26%20at%204.44.56%20PM.png?raw=true)