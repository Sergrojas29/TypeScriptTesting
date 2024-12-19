import { Game } from "./models/Game.js";
const testGame = new Game();
testGame.init_teams(2);
testGame.teams[0].CreateTeamWithCards();
testGame.teams[1].CreateTeamWithCards();
testGame.addCardsFromTeam();
console.log(testGame);
// function testGameRules(time: number): void {
//     while(time != 0){
//         let curCard = testGame.getCurrectCard()
//         console.log(curCard);
//         testGame.removeCardByID(curCard.id)
//     }
// } 
let curCard = testGame.getCurrectCard();
console.log(curCard);
testGame.removeCardByID(curCard.id);
curCard = testGame.getCurrectCard();
console.log(curCard);
testGame.removeCardByID(curCard.id);
curCard = testGame.getCurrectCard();
console.log(curCard);
testGame.removeCardByID(curCard.id);
curCard = testGame.getCurrectCard();
console.log(curCard);
testGame.removeCardByID(curCard.id);
curCard = testGame.getCurrectCard();
console.log(testGame);
//Set players per team ? //! might be better to just keep it to two for now
// if 3 team * 2 players * 10 cards each = 60 cards
// each team needs to make 20 cards
//! Start a server to store the cards maybe 
// first Team 1 player one 
// first Team 1 player Two
//then Team 2 ...
//..Team 3 .. player two
//cards are shuffled 
// cards are reviewed by each player
// out of ten cards one 7 are used
// 7 Get put in inactive deck 
// 3 put into discard deck
//Game starts
//Iterate unit all cards are no longer in active deck
//Timer starts 
//Options are got answer
//      *Correct
//      *Skip
// reshuffle deck -> show current scores
// wait for next round:
// repeat
