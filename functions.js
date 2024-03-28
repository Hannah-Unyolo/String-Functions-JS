//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function names(){
    let arr = ['Hannah','Unyolo','Dickson'];
    let reversed = arr.reverse()
    console.log({reversed});
}
names();

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function numbers(){
    let arr2 = [2,-5,7,-6,9] 
    arr2.forEach(element => {
        if(element.includes(-element)){
            return 'negative'
            
            (element.includes(element))
        
        }
        
        else{
            return 'zero'
        }
    });
}
console.log(numbers)

