class Game {
    static numOfCards = 0;
    public teams: Team[] = [];
    public round: number = 0;
    private roundTime: number = 30;
    activeCards: Card[] = [];
    usedCards: Card[] = []
    constructor() {
    }
    addTeam(newteam: Team): void{
        this.teams.push(newteam)
    }
    creatCard(title:string, description?: string, point:number=1):Card {
        const ret: Card = {
            id: ++Game.numOfCards,
            title: title,
            description: description,
            point: point,
        } 
        return ret;
    }
    addCard(title:string, description?: string, point?:number): void {
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
    getActiveCards(): Card[] {
        return this.activeCards;
    }
    getUsedCards(): Card[] {
        return this.usedCards;
    }
}


export class Team {
    static numberOfteam: number = 0; 
    public id: number;
    public totalPoint: number =0;
    cards:Card[] = [];
    constructor() {
        this.id = ++Team.numberOfteam;
    }
    updateScore(acuiredCard: Card):void{
        this.totalPoint += acuiredCard.point
    }

}

export type Card = {
    [index: string] :string| number | undefined
    id: number ;
    title: string;
    description?: string;
    point: number;
}




