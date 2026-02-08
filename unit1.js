var s=10;
console.log('test',s);


//w3 school or tutorial point leran javascript
//let is a block scope
let x=12;
{
    let x=13;
}
console.log("x= ",x)
const PI =3.14 //if constant is used then we can't change the value
console.log("PI==",PI)

//
const arr = [1,2,3,4];
arr.push(5); // to add element in an array
arr[0]=10; // to replace element of 0th index
arr[3]=20;
console.log(arr);

//mocha->live script->java script
// sloppy mode and strict mode
//ECMA
//ES5->use strict mode then we can't use a=10; we have to declare var, let, const
//Anonymous funcion (a function without a name)
let show1=function(){
    console.log("Anonymous function");
}
//single line anonymous function
let show2=()=>console.log("Arrow...")
let add=(a,b)=>(a+b);

//multiple line Anonymous
let sum = (a,b=50) => {
    let result =0;
    result = a+b;
    return result;
}

show1(); //function calling and printing
show2();
console.log(add(10,20));
console.log(sum(45));

//create a student class with attributes and find the 4th highest marks
/*
class Student {
    constructor(name,marks) {
        this.name = name ;
        this.marks = marks ;
    }
}

const s1 = new Student("Ruchi",90);
const s2 = new Student("Suhani",91);
const s3 = new Student("Ravi",85);
const s4 = new Student("Pankaj",87);
const s5 = new Student("Varsha",80);

const students = [s1, s2, s3, s4, s5];

students.sort((a,b) => b.marks - a.marks);

//4th highest index(1)
const fourthHighest = students[3];

console.log(fourthHighest.name, fourthHighest.marks);
*/

//anonymous function example important for exam even odd but we have to do using ternary operator
let s1=function(num){
    if(num%2==0){
        console.log(num,"is even number");
    }
    else{
        console.log(num,"is odd");
    }
}
s1(30);

//check greater between 2 number using anonymous function
let s2=function(a,b){
    if(a>b){
        console.log(a,"is greatest");
    }else{
        console.log(b,"is greatest");
    }
}
s2(80,75);

// Practice more example like these greatest between 3 

//  Node.\filename.js to run our code if running icon is not there first go on file name double click it then click open in integrated terminal then give command node .\filename.js


// WAP to create a simple calculator 
let calculator = (num1,num2,operator)=>{
    switch(operator){
        case'+':
         return num1+num2;
         case '-':
            return num1-num2;
         case'*':
            return num1*num2;
        case'/':
            if(num2==0){
                return "Division by zero is not allowed";
            }
            return num1/num2;
            defalut:
            return "Invalid operator";
    }
}

console.log(calculator(20,10,'+'));
console.log(calculator(20,0,'/'));