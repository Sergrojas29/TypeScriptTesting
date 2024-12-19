import { Card } from "../models/Game";

export function shuffleArray(arry: Card[]): Card[]{
    let index: number = arry.length;
    let newArray: Card[] = [];
    let oldArray: Card[] = [...arry];
    while(index != 0){
        let rand = Math.floor(Math.random() * index)
        newArray.push(oldArray[rand]);
        oldArray.splice(rand, 1);

        --index;
    }
    return newArray
}