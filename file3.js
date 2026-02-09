// const user={
//   name:"Anchal",
//   age:40,
//   //Welcome is variable 
//   welcome:function(){
//     console.log("Welcome",this.name);
//     console.log(this); //user object
//   }
// };
// user.welcome();
// user.name="Test"
// user.welcome();
// console.log(this); //global object
//Employ object and name age salary


// const employ={
//   name:"ravi",
//   age:30,
//   salary:50000,
//   details:function(){
//     console.log(`${this.name}`,"Employ of kiet");
//     console.log(this); //employ object
//   }
// }
// employ.details();
// function outer(){
//   let x=10;
//   function inner(){
//     console.log("Value of x in inner function:",x);
//   }
//   inner();
//   console.log("Value of x in outer function:",x);
// }
// outer();
//inner(); //error inner is not defined
//this is not accessible outside the outer function it is lexically scoped
// let a=5;
// function outer(){
//   let b=10;
//   function inner(){
//     let c=15;
//     console.log(a,b,c);
//   }
//   inner();
// }
// outer();//first outer function is called then inner function is called and it can access the variables of outer function and global variable
//then error will be call
//where a is global b is lexical and c is local variable
//Important for exam

let abc={
  name:"anchal",
  age:20,
  outer:function(){
    console.log("here in log",this.name),
    //inner should be arrow function to take the nearest object//inner should be arrow anonymous
    inner=()=>{
      console.log("here in inner",this.name);
    }
    inner();//error as this in normal function does not take the nearest object but takes the global object
    //inner() will work as arrow(=>) function has the near by context this

  }
}
abc.outer();
//destructuring of array
let numbers=[10,20,30];
let [a,b,c]=numbers
console.log(a,b,c);
//Extra array values are ignored
let values=[1,2,3];
let [x,y]=values;
console.log(x,y);

///Swapping
const arr=[10,20,30];
const[p, q, r]=arr;
const[x1,...y1]=arr; //rest operator
console.log(a,b,c);