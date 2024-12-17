"use strict";
class Coder {
    constructor(name, music, age, //private need a get() function
    lang = 'Typescript' // Default value
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // this.name = name;
        // this.music = music;
        // this.age = age;
        // this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Coder("Sergio", 'Rock', 30);
Dave.secondLang = 'hello';
console.log(Dave.secondLang);
// npm install -g typescript  //! Installes Global 
// tsc --init //! creates tsconfig.json
// tsc yourFile.ts 
// tsc --watch  //!This continuously monitors your TypeScript files for changes and automatically recompiles them whenever a change is detected.
console.log(`Hello I'm ${Dave.name} and I'm ${Dave.getAge()} years old`);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
}
