/* // Array Destructing

let numbers = [10,20,30];

let[a,b,c,z]=numbers;
console.log("a=",a);
console.log(b);
console.log(c);
console.log(z);
const [x1,...y1]=numbers; //bacha hua 
console.log(x1)
console.log(y1)

//Extra array values are ignored
//let values =[1,2,3]

//object clone 
let wtruchi={
    name:"ruchi",
    age:22,
    key:"xyz"
}
let duplicate={...wtruchi,key:"hh"};//Default value
duplicate['Add'] = 'hjl'
console.log(wtruchi)
console.log(duplicate)


let duplicatek={name:wtruchi.name,age:wtruchi.age}
console.log(duplicatek)


// Object Deconstructing
let currentage=19;
let employee={
    name:"ruchi",
    empid:20,
    department:"cs"
}
employee.name="anjali"
let {name,empid}=employee;
console.log(name);
console.log(empid);
// */
//shift+alt+A for comments 

let wtruchi={
    name:"ruchi",
    age:22,
    key:"xyz"
}
//destructuring
function show({name,age}){
 console.log(name , age)
}
show(wtruchi)

