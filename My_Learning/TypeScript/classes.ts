class Player{
    name: string;
    age: number;
    country: string;
    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c
    }

    play(){
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const Obydul = new Player("Obydul",40,"Bangladash");
console.log(Obydul);

const players: Player[] = [];
players.push(Obydul);

