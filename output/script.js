import { player } from './classes/player.js';
const mashrafi = new player('mashrafi', 40, 'bangladesh');
let sakib;
sakib = new player('sakib', 38, 'Bangladesh');
console.log(mashrafi.age);
console.log(sakib.country);
const players = [];
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
