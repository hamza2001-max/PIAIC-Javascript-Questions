let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
    if (i == 0) {
        console.log(`${array[i]}st`);
    }
    else if (i == 1) {
        console.log(`${array[i]}nd`);
    }
    else if (i == 2) {
        console.log(`${array[i]}rd`);
    }
    else {
        console.log(`${array[i]}th`);
    }
}