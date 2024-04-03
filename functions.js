//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function names(){
    let arr = ['Hannah','Unyolo','Dickson'];
    let reversed = arr.map(str=>[...str].reverse().join(""));
    console.log({reversed});
}
names();

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function number(arr2){
  arr2.forEach(element => {
    if(element>0){
        console.log ("Positive");
    }else if(element<0){
        console.log ("Negative");
    }else {
        console.log("Zero");
    }
  });

}
let array = [2,-5,7,-6,9];
number(array);


//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortBySalary(employees){

    return employees.sort((a,b)=>a.salary -b.salary);
}
const employees =[
  {id:1,name:"Hannah",salary:100000},
  {id:3,name:"Pempho",salary:300000},
  {id:2,name:"Konemi",salary:200000},
  {id:4,name:"Tina",salary:400000}
];
let sortWorkers =sortBySalary(employees)
console.log(sortWorkers)

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiply(numbers){
  numbers.forEach(num=>{
    console.log(num*2);
  })
}
multiply([10,20,30,40,50])

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function multiplyAdd(numbers){
const number1=numbers.slice(0,4);
const number2=numbers.slice(-2);
number1.forEach(n=>{
  console.log((n*8));
})
number2.forEach(n=>{
  console.log((n+5));
})
}
multiplyAdd([1,2,3,4,5,6,7,8,9,10])