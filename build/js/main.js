"use strict";
class Game {
    constructor() {
        this.teams = [];
        this.round = 0;
        this.roundTime = 30;
        this.activeCards = [];
        this.usedCards = [];
    }
    addTeam(newteam) {
        this.teams.push(newteam);
    }
    creatCard(title, description, point = 1) {
        const ret = {
            id: ++Game.numOfCards,
            title: title,
            description: description,
            point: point,
        };
        return ret;
    }
    addCard(title, description, point) {
        const ret = this.creatCard(title, description, point);
        this.activeCards.push(ret);
    }
    removeCardByID(cardID) {
        const cardIndex = this.activeCards.findIndex((card) => card.id === cardID);
        try {
            const [cardRemoved] = this.activeCards.splice(cardIndex, 1);
            this.usedCards.push(cardRemoved);
        }
        catch (error) {
            console.warn(`Card with ID ${cardID} not found`);
        }
    }
    getActiveCards() {
        return this.activeCards;
    }
    getUsedCards() {
        return this.usedCards;
    }
}
Game.numOfCards = 0;
class Team {
    constructor() {
        this.totalPoint = 0;
        this.cards = [];
        this.id = ++Team.numberOfteam;
    }
    updateScore(acuiredCard) {
        this.totalPoint += acuiredCard.point;
    }
}
Team.numberOfteam = 0;
const testGame = new Game();
const team1 = new Team();
testGame.addCard("Kraken", "Monster of the Sea", 3);
testGame.addCard("The Nanny", "Funny lady from a sitcom");
testGame.addTeam(team1);
console.log(testGame.getActiveCards());
console.log(team1.totalPoint);
team1.updateScore(testGame.activeCards[0]);
console.log(team1.totalPoint);
testGame.removeCardByID(2);
console.log(testGame.activeCards);
