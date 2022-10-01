const usedUsernames = ["john", "luke", "lyle"];
const newUsernames = ["JOhn", "lyle", "logan"];
for (let i = 0; i < newUsernames.length; i++) {
    if (usedUsernames.includes(newUsernames[i].toLowerCase())) {
        console.log(`${newUsernames[i]} already taken`);
    }
    else {
        console.log(`${newUsernames[i]} available`);
    }
}