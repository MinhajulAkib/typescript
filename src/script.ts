console.log('hello');

const country = 'i love bangladesh';
console.log(country);

let playerName = 'mashrafi';
console.log(playerName);
//playerName = 34;
//console.log(playerName);


//function
function multiply(a:number, b:number){
    return a * b;
}
console.log(multiply(2,3));




//ARRAY
let mixed = ['banana', 4, false, {}];
mixed.push('orange', 5);
console.log(mixed);


//object

let person ={
    name:"akib",
    age:24,
    country: 'Bangladesh',
    isName: true
}

person.country = 'sakib';
console.log(person.name);


//any
let a :any;
a = 5;
a = 'sumit';
console.log(a);



//how to use function
let myFunc = () => {
    console.log('hello');
}
myFunc();



const myhFunc = (a:number, b:number, c:string = 'true'): number =>{
        return a + b;
}
console.log(myhFunc(3,5));