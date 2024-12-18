import { Team } from "./Team.js";

export class Game {
    static numOfCards = 0;
    public teams: Team[] = [];
    public round: number = 0;
    private roundTime: number = 30;
    private cardPerTeam: number = 2;
    public timer:number = 0;
    activeCards: Card[] = [];
    usedCards: Card[] = [];
    constructor() {};

    creatCard(title:string, description: string |null, point:number=1):Card {
        const ret: Card = {
            id: ++Game.numOfCards,
            title,
            description,
            point,
        } 
        return ret;
    }
    addCard(title:string, description: string | null, point?:number): void {
        const ret = this.creatCard(title, description, point);
        this.activeCards.push(ret);
    }
    removeCardByID(cardID: number): void {
        const cardIndex = this.activeCards.findIndex((card) => card.id === cardID);
        try {
            const [cardRemoved] = this.activeCards.splice(cardIndex, 1);
            this.usedCards.push(cardRemoved)
            
        } catch (error) {
            console.warn(`Card with ID ${cardID} not found`)
        }
        
    }

    Starttime(): void{
        this.timer = this.roundTime
        const newTime : number = setInterval(()=>{
            this.timer--;
            if (this.timer <= 0){clearInterval(newTime)} ;
        },1000)
    }

    getActiveCards(): Card[] {
        return this.activeCards;
    }
    getUsedCards(): Card[] {
        return this.usedCards;
    }
    private createTeam():Team{
        const ret: Team = new Team();
        return ret;
    }
    public init_teams(numberOfteam : number):void{
        for (let i = 0; i < numberOfteam; i++) {
            this.teams.push(this.createTeam())}
        }
    askForCards(selectedTeam: Team):void{
        let cardsRemaining:number = this.cardPerTeam;
        while(cardsRemaining > 0){
            const title = prompt("Whats the Title?");
            if(!title){
                alert("Card title is required")
                continue
            }
            const description = prompt("Describe it please.") || null;
            const points = Number(prompt("Point Value?"));
            this.addCard(title,description)
            --cardsRemaining
            } 
        }
    
    }




export type Card = {
    [index: string] :string| number | undefined | null
    id: number ;
    title: string;
    description?: string | null;
    point: number;
}