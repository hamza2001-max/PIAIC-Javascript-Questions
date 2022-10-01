function titleCase(text) {
    if (text === "")
        return false;
    text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}
let prop = "hamza";
console.log(prop.toLowerCase());
console.log(prop.toUpperCase());
console.log(titleCase(prop));

