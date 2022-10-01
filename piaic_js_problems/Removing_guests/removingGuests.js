let name1 = "john";
let name2 = "rodney";
let name3 = "joseph";
let name4 = "lyle";
let name5 = "chris";
let name6 = "zach";

let array = [name1, name2, name3, name4];
for(let i = 0; i<array.length; i++){
    console.log(array[i] + ", I would like to invite you to a dinner");
}

console.log("\n" + name3 + " and " + name4 + " cant make it to the dinner \n");
array.pop(name3); 
array.pop(name4); 

console.log("sending  new invitations\n");
array.push(name5); 
array.push(name6); 

for(let i = 0; i<array.length; i++){
    console.log(array[i] + ", I would like to invite you to a dinner");
}

console.log("\n");
array.pop(name5);
array.pop(name6);
console.log(name5 + ", I am sorry the dinner plans got canceled");
console.log(name6 + ", I am sorry the dinner plans got canceled");

console.log("\n");
console.log(name1 + ", You are still invited.");
console.log(name2 + ", You are still invited.");

array.pop(name1);
array.pop(name2);

console.log(array);