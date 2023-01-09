// ******* String Type ******* 
function greeting1(name) {
    return "Hello " + name + ", How are you?";
}
console.log(greeting1("Kevin"))
//_________________________________________________
function greeting2(name2) {
    return "Hello ".concat(name2).concat(", How are you?");
}
console.log(greeting2("Estuardo"))
//_________________________________________________

function greeting3(lastname) {
    return `Hello ${lastname}!`;
}
console.log(greeting3("Mr Palacios"))
// ******* String: length *******
let text = "Do you Know the way?";
charNumber = text.length;
console.log(charNumber);
//_________________________________________________
function lengthh(count) {
    return "The amount of Letters: " + count.length;
}
console.log(lengthh("Vampire"));
// ******* String: toUpperCase() *******
let town = 'stop';
let output = town.toUpperCase();
console.log(output);
//_________________________________________________
function toCase(Case) {
    return Case.toLowerCase() + "-" + Case.toUpperCase()
}
console.log(toCase("stop!"))
// ******* String: charAt() *******
let s1 = 'Core'.charAt(0);
let s2 = 'Code'.charAt(0);
function sc(s1, s2) {
    return s1 + s2;
}
console.log(sc(s1, s2))
// ******* String: indexOf() *******
function indexOfIgnoreCase(c1, c2) {
    let c1Lower = c1.toLowerCase();
    let c2Lower = c2.toLowerCase();
    return c1Lower.indexOf(c2Lower);
}
console.log(indexOfIgnoreCase("Tengo", "sueño"))