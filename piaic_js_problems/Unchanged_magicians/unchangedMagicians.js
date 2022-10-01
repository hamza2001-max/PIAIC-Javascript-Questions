const show_magicians = (array) => {
    for(let i =0; i < array.length; i++){
        console.log(array[i]);
    }
}

const magicians = ["magician1", "magician2", "magician3"];
show_magicians(magicians);

let magiciansCopy = magicians.slice();
const make_great = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = "The Great " + array[i];
    console.log(array[i]);
  }
}

console.log("Copy Version");
make_great(magiciansCopy);

console.log("Original Version");
show_magicians(magicians);

