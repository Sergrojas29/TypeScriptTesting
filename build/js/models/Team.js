export class Team {
    static numberOfteam = 0;
    id;
    PlayersPerTeam = 2;
    totalPoint = +0;
    playerInTeam = [];
    cards = [];
    constructor() {
        this.id = ++Team.numberOfteam;
    }
    updateScore(acuiredCard) {
        this.totalPoint += acuiredCard.point;
    }
    createPlayer(optionalName = null) {
        const ret = new Player();
        if (optionalName) {
            ret.player_name = optionalName;
        }
        ;
        return ret;
    }
    addPlayer(optionalName) {
        this.playerInTeam.push(this.createPlayer(optionalName));
    }
    getTeamsCards() {
        return this.cards;
    }
    /// DEBUG
    CreateTeamWithCards() {
        for (let i = 0; i < this.PlayersPerTeam; i++) {
            this.addPlayer(`Player:${i} T:${this.id}`);
        }
        this.playerInTeam.map((player) => {
            for (let i = 0; i < 1; i++) {
                player.addCard(`Card ${i}`);
            }
            this.cards = [...this.cards, ...player.player_cards];
        });
    }
}
export class Player {
    numOfCards = 0;
    static num_of_player = 0;
    player_name;
    playerID;
    player_cards = [];
    constructor() {
        this.playerID = ++Player.num_of_player;
    }
    creatCard(title, description = '', point = 1) {
        const ret = {
            id: Number(`${this.playerID}${this.numOfCards++}`), //create id based on player id and card count
            title,
            description,
            point,
        };
        return ret;
    }
    addCard(title, description, point) {
        const ret = this.creatCard(title, description, point);
        this.player_cards.push(ret);
    }
    getPlayerCardstoTeamDeck() {
        return this.player_cards;
    }
}
