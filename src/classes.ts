class player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, m: number o: string){
     this.name = n;
     this.age = m;
     this.country = o;
    }
    play(){
        console.log(`${this.name} from{this.country} is playing`);
    }
}

const mashrafi = new player('mashrafi', 40, 'bangladesh');
console.log(mashrafi);

const players: player[] = [];
players.push(mashrafi);