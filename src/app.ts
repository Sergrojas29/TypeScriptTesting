import {Game} from "./models/Game.js";
import {Team}  from "./models/Team.js";


const testGame:Game = new Game();


testGame.init_teams(3);

testGame.askForCards(testGame.teams[0]);

console.log(testGame.activeCards);
// testGame.addCard("Kraken", "Monster of the Sea",3)
// testGame.addCard("The Nanny", "Funny lady from a sitcom")

// testGame.addTeam(team1);

// console.log(testGame.getActiveCards())

// console.log(team1.totalPoint)
// team1.updateScore(testGame.activeCards[0])
// console.log(team1.totalPoint)

// testGame.removeCardByID(2)

// console.log(testGame.activeCards)