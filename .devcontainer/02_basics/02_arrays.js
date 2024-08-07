const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Spread operator 

const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray);

console.log(Array.isArray("sujeet"))
console.log(Array.from("sujeet"))
console.log(Array.from({name: "sujeet"}))  //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
