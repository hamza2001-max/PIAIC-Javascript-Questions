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
array.pop(name3, name4); 
console.log("sending  new invitations\n");
array.push(name5, name6); 

for(let i = 0; i<array.length; i++){
    console.log(array[i] + ", I would like to invite you to a dinner");
}