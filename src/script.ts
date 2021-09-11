import { player } from './classes/player.js';
import { isPlayer } from './interfaces/isPlayer.js';

const mashrafi = new player('mashrafi', 40, 'bangladesh');

let sakib: isPlayer;
sakib = new player('sakib', 38, 'Bangladesh');


console.log(mashrafi.age);
console.log(sakib.country);

const players: isPlayer[] = [];
players.push(sakib);
players.push(mashrafi);







//interfaces
/*interface rectanglerOptions{
    width: number,
    length: number,
}
function drawRectangle(options: rectanglerOptions){
    let width = options.width;
    let length = options.length;
}
let threeDrectangle = {
    width: 30,
    length: 20,
    height: 10,
}

drawRectangle(threeDrectangle);
*/



//generics
/*const addID = <T extends{
    name: string;
    age: number;
}
>(
    obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
};

let user = addID({
    name: 'mashrafi',
    age: 45,
    country: 'bangadesh',
});

addID(user);
*/



//interface using generics

interface airResponse<T>{
    status: number;
    type: string;
    data: T;
}
const response1: airResponse<string> ={
    status: 200,
    type: 'good',
    data: 'test'

}






