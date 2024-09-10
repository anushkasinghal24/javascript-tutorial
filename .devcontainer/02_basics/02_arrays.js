const marvel_heroes = ["Doraemon", "Shinchan","Henry","Ninja Hathori"]
const dc_heroes =["superman","flash","Batman"]
marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

const all_new_heros = [...marvel_heroes,...dc_heroes]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 



console.log(Array.isArray("Anushka"));
console.log(Array.from("Anushka"));
console.log(Array.from({name:"Anushka"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)) // Retutns a new array from the set of elements 

