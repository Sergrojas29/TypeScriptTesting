import { Team } from "./Team.js";
export class Game {
    static numOfCards = 0;
    teams = [];
    round = 0;
    roundTime = 30;
    cardPerTeam = 2;
    timer = 0;
    activeCards = [];
    usedCards = [];
    constructor() { }
    ;
    creatCard(title, description, point = 1) {
        const ret = {
            id: ++Game.numOfCards,
            title,
            description,
            point,
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
    Starttime() {
        this.timer = this.roundTime;
        const newTime = setInterval(() => {
            this.timer--;
            if (this.timer <= 0) {
                clearInterval(newTime);
            }
            ;
        }, 1000);
    }
    getActiveCards() {
        return this.activeCards;
    }
    getUsedCards() {
        return this.usedCards;
    }
    createTeam() {
        const ret = new Team();
        return ret;
    }
    init_teams(numberOfteam) {
        for (let i = 0; i < numberOfteam; i++) {
            this.teams.push(this.createTeam());
        }
    }
    askForCards(selectedTeam) {
        let cardsRemaining = this.cardPerTeam;
        while (cardsRemaining > 0) {
            const title = prompt("Whats the Title?");
            if (!title) {
                alert("Card title is required");
                continue;
            }
            const description = prompt("Describe it please.") || null;
            const points = Number(prompt("Point Value?"));
            this.addCard(title, description);
            --cardsRemaining;
        }
    }
}
