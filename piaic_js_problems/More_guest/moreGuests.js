let name1 = "john";
let name2 = "rodney";
let name3 = "joseph";
let name4 = "lyle";
let name5 = "chris";
let name6 = "zach";
let name7 = "luke";

let array = [name1, name2, name3, name4];
for(let i = 0; i<array.length; i++){
    console.log(array[i] + ", I would like to invite you to a dinner");
}

console.log("\n");

array.splice(0, 0, name5);
array.push(name7);
for(let i = 0; i<array.length; i++){
    console.log(array[i] + ", I would like to invite you to a dinner");
}
console.log("\n");
let middle = array.length/2;
array.splice(middle, 0, name6)
for(let i = 0; i<array.length; i++){
    console.log(array[i] + ", I would like to invite you to a dinner");
}