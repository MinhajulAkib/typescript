"use strict";
var player = /** @class */ (function () {
    function player(n, m, o) {
        this.name = n;
        this.age = m;
        this.country = o;
    }
    player.prototype.play = function () {
        console.log(this.name + " from{this.country} is playing");
    };
    return player;
}());
var mashrafi = new player('mashrafi', 40, 'bangladesh');
console.log(mashrafi);
var players = [];
players.push(mashrafi);
