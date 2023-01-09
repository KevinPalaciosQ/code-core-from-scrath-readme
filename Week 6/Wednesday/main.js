// ******* Functions *******
function hello() {
    return "Hello Brother";
}
let result = hello();
console.log(result);
// ******* Multiple functions *******
function alpha() {
    return "Hi";
}
function betha() {
    return "Hello!";
}
console.log(alpha())
console.log(betha())
// ******* Function Calls *******
function Greetings() {
    return "It has been a long time… ";
}
let salutation = Greetings()
console.log(salutation);
// ******* What is x? (Function Version) *******
function reply(phrase) {
    return phrase;
}
let y = reply("How do you made that?");
console.log(y)


// ******* Parameters ******* 
function echo(message) {
    return message;
}
let resultecho = echo("echo, echo, echo...");
console.log(resultecho)