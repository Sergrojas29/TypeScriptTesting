import { Game, Card } from "./Game.js";
import { shuffleArray } from "../utils/utils.js";

export class Team {
    static numberOfteam: number = 0; 
    public id: number;
    private PlayersPerTeam:number = 2;
    public totalPoint: number = +0;
    public playerInTeam: Player[] = [];
    public cards:Card[] = [];
    constructor() {
        this.id = ++Team.numberOfteam;
    }
    updateScore(acuiredCard: Card):void{
        this.totalPoint += acuiredCard.point
    }
    private createPlayer(optionalName: string | null = null):Player{
        const ret: Player = new Player()
        if(optionalName){ret.player_name = optionalName};
        return ret;
    }
    public addPlayer(optionalName?: string):void{
        this.playerInTeam.push(this.createPlayer(optionalName))
    }
    public getTeamsCards():Card[]{
        return this.cards;
    }

    /// DEBUG
    public CreateTeamWithCards():void {
        for (let i = 0; i < this.PlayersPerTeam; i++) {
            this.addPlayer(`Player:${i} T:${this.id}`)
        }
        this.playerInTeam.map((player)=> {
            for (let i = 0; i < 1; i++) {
                player.addCard(`Card ${i}`)
            }
            this.cards = [...this.cards, ...player.player_cards]
        })
    }

}


export class Player {
    private numOfCards = 0;
    static num_of_player: number = 0;
    public player_name?: string | null;
    private playerID: number;
    public player_cards: Card[] = [];
    constructor(){
        this.playerID = ++Player.num_of_player 
    }

    creatCard(title:string, description: string = '', point:number=1):Card {
        const ret: Card = {
            id: Number(`${this.playerID}${this.numOfCards++}`), //create id based on player id and card count
            title,
            description,
            point,
        } 
        return ret;
    }
    addCard(title:string, description?: string, point?:number): void {
        const ret = this.creatCard(title, description, point);
        this.player_cards.push(ret);
    }
    getPlayerCardstoTeamDeck(): Card[]{
        return this.player_cards
    }

}