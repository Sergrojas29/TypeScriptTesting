class Coder {
    secondLang! : string; //Create but no dont initailze
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,    //private need a get() function
        protected lang: string = 'Typescript' // Default value
    ) {
        // this.name = name;
        // this.music = music;
        // this.age = age;
        // this.lang = lang;
    }
    public getAge(){
        return this.age;
    }
}

const Dave = new Coder("Sergio", 'Rock', 30);

Dave.secondLang = 'hello'
console.log(Dave.secondLang)
// npm install -g typescript  //! Installes Global 
// tsc --init //! creates tsconfig.json
// tsc yourFile.ts 
// tsc --watch  //!This continuously monitors your TypeScript files for changes and automatically recompiles them whenever a change is detected.


console.log(`Hello I'm ${Dave.name} and I'm ${Dave.getAge()} years old`)


class WebDev extends Coder {
    constructor(public computer: string,
        name: string,
        music:string,
        age: number,
    ){
        super(name, music ,age)
    }
}

