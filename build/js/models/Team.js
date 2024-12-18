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
