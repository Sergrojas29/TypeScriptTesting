export function shuffleArray(arry) {
    let index = arry.length;
    let newArray = [];
    let oldArray = [...arry];
    while (index != 0) {
        let rand = Math.floor(Math.random() * index);
        newArray.push(oldArray[rand]);
        oldArray.splice(rand, 1);
        --index;
    }
    return newArray;
}
