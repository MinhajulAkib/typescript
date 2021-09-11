import { player } from './classes/player.js';
const mashrafi = new player('mashrafi', 40, 'bangladesh');
let sakib;
sakib = new player('sakib', 38, 'Bangladesh');
console.log(mashrafi.age);
console.log(sakib.country);
const players = [];
players.push(sakib);
players.push(mashrafi);
const response1 = {
    status: 200,
    type: 'good',
    data: 'test'
};
