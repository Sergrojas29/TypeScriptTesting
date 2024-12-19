import { Player, Team } from "./Team.js";
import { shuffleArray } from "../utils/utils.js";

export class Game {
    
    public teams: Team[] = [];
    public round: number = 0;
    private roundTime: number = 30;
    private cardPerTeam: number = 2;
    public timer:number = 0;
    public currentCard: number = 0;
    activeCards: Card[] = [];
    usedCards: Card[] = [];
    constructor() {};





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

    public addCardsFromTeam():void{
        this.teams.map((team)=> {
            this.activeCards = [...this.activeCards ,...team.cards];
        })
        this.shuffleActiveDeck();
    }
    public shuffleActiveDeck():void{
        this.activeCards = shuffleArray(this.activeCards);
    }

    public getCurrectCard(): Card{
        const sizeOfDeck: number = this.activeCards.length;
        if(sizeOfDeck <= 0 ) {  // check if the game or round is over
            this.round == 3 ? console.log('end game') : console.log('end round')
        }
        const index = Math.floor(Math.random() * sizeOfDeck)
        const activeCard = this.activeCards[index]

        return activeCard;
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

    
    // askForCards(selectedTeam: Team):void{
    //     let cardsRemaining:number = this.cardPerTeam;
    //     while(cardsRemaining > 0){
    //         const title = prompt("Whats the Title?");
    //         if(!title){
    //             alert("Card title is required")
    //             continue
    //         }
    //         const description = prompt("Describe it please.") || null;
    //         const points = Number(prompt("Point Value?"));
    //         this.addCard(title,description)
    //         --cardsRemaining
    //         } 
    //     }
    
    }




export type Card = {
    [index: string] :string| number | undefined | null
    id: number ;
    title: string;
    description: string;
    point: number;
}