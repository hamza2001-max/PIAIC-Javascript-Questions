const sorted = (array) => {
    console.log(array.sort());
}

let locationArray = ["sweden", "russia", "new zealand", "iran", "norway"];
console.log("Before Sort");
for(let i = 0; i < locationArray.length; i++) {
    console.log(locationArray[i]);
}

let sortedLocationArray = locationArray.slice().sort();

console.log("\nAfter Sort");
for(let i = 0; i < locationArray.length; i++) {
    console.log(sortedLocationArray[i]);
}

console.log("\nOrginal Sort");
for(let i = 0; i < locationArray.length; i++) {
    console.log(locationArray[i]);
}

console.log("\nAfter Reverse Sorted Sort");
for(let i = locationArray.length-1; i>=0; i--){
    console.log(sortedLocationArray[i]);
}

console.log("\nOrginal Sort");
for(let i = 0; i < locationArray.length; i++) {
    console.log(locationArray[i]);
}

console.log("\nAfter Reverse Sort");
let reverseArray = locationArray.reverse();
for(let i = 0; i < locationArray.length; i++) {
    console.log(reverseArray[i]);
}

console.log("\nAfter Reversing reversed Sort");
for(let i = locationArray.length-1; i>=0; i--){
    console.log(locationArray[i]);
}

console.log("\nSorted Array");
locationArray.sort();
for(let i =0; i<locationArray.length; i++){
    console.log(locationArray[i]);
}

console.log("\nReversed Array");
locationArray.reverse();
for(let i =0; i<locationArray.length; i++){
    console.log(locationArray[i]);
}
