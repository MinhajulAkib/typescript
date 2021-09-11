import { isPlayer } from '../interfaces/isPlayer.js';
export class player implements isPlayer{
    constructor(
     public name: string,
     private age: number,
     readonly country: string,
    ){}
    getAge(){
        return this.age;
    }
    play(){
        console.log(`${this.name} from{this.country} is playing`);
    }
}

