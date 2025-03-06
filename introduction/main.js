//synchronus
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")

//when you see the output you will observe that it will execute in order, starting from 1 to 5
//this behaviour is not always ideal, hence we do asynchronus programming

//asynchronus
setTimeout(() => {
    console.log("1")
}, 1000); //represents seconds

setTimeout(() => {
    console.log("2")
}, 4000);

setTimeout(() => {
    console.log("3")
}, 5000);

setTimeout(() => {
    console.log("4")
}, 3000);

setTimeout(() => {
    console.log("5")
}, 2000);
