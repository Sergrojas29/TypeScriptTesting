class Game {
    static numOfCards = 0;
    teams = [];
    round = 0;
    roundTime = 30;
    activeCards = [];
    usedCards = [];
    constructor() {
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
export class Team {
    static numberOfteam = 0;
    id;
    totalPoint = 0;
    cards = [];
    constructor() {
        this.id = ++Team.numberOfteam;
    }
    updateScore(acuiredCard) {
        this.totalPoint += acuiredCard.point;
    }
}
