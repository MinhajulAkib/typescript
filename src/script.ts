import { player } from './classes/player.js';
const mashrafi = new player('mashrafi', 40, 'bangladesh');
const sakib = new player('sakib', 38, 'Bangladesh');
console.log(mashrafi.age);
console.log(sakib.country);

const players: player[] = [];
players.push(sakib);
players.push(mashrafi);