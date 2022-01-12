// Write your solution here!
const pets = ["Milo", "Otis", "Garfield"];
const append = pets.slice();
const prepend = pets.slice();
const removeLast = pets.slice();
const removeFirst = pets.slice();
append.push("Odie");
prepend.unshift("Odie");
removeLast.pop();
removeFirst.shift();