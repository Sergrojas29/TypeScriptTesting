import { Team } from "./Team.js";
import { shuffleArray } from "../utils/utils.js";
export class Game {
    teams = [];
    round = 0;
    roundTime = 30;
    cardPerTeam = 2;
    timer = 0;
    currentCard = 0;
    activeCards = [];
    usedCards = [];
    constructor() { }
    ;
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
    addCardsFromTeam() {
        this.teams.map((team) => {
            this.activeCards = [...this.activeCards, ...team.cards];
        });
        this.shuffleActiveDeck();
    }
    shuffleActiveDeck() {
        this.activeCards = shuffleArray(this.activeCards);
    }
    getCurrectCard() {
        const sizeOfDeck = this.activeCards.length;
        if (sizeOfDeck <= 0) { // check if the game or round is over
            this.round == 3 ? console.log('end game') : console.log('end round');
        }
        const index = Math.floor(Math.random() * sizeOfDeck);
        const activeCard = this.activeCards[index];
        return activeCard;
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
}
