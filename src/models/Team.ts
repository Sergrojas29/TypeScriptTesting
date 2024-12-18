import { Game, Card } from "./Game.js";

export class Team {
    static numberOfteam: number = 0; 
    public id: number;
    public totalPoint: number = +0;
    public cards:Card[] = [];
    constructor() {
        this.id = ++Team.numberOfteam;
    }
    updateScore(acuiredCard: Card):void{
        this.totalPoint += acuiredCard.point
    }

}