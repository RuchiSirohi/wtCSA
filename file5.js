/* // call back function : A call back is a function paseed as an argument 
//asyncronys

console.log('hello');
setTimeout(function(){
    console.log('hi');
},2000);
function printHello2(){
    console.log('hello2');
}
printHello2();
console.log('welcome');

 */ //shift+alt+a for comments

// const { useCallback } = require("react");


 /* // promises is a keyword in js which take two parameter 'resolve' and 'reject'
 const promise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('hi this is promise');
     },2000);
 })
 promise.then((message) =>{
    console.log(message);
 }).catch((error) => {
    console.eroor(error);
 }) */



 function bakeCake(mycallback){
    console.log('1.cake is baking');
    setTimeout(()=>{
        console.log('2.cake is ready');
        mycallback();
    },2000);
 }
 bakeCake(()=>{
    console.log('3.now i can eat this');
 });