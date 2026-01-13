// // Heap Vs Stack Allocation in JavaScript
// //Heap - Heap is used for dynamic allocation it is referenceType
// //Stact - Stack is used for static allocation, it is primitive type


// //Heap Example
// let obj = {
//     Name:"Naman",
//     course:"BCA"
// }
// console.log(obj.Name);

// let obj1 = obj;
// obj1.Name = "Rohan"
// console.log(obj.Name);
// console.log(obj1.Name)

// // Stack

// let a = "Karan"
// let b = a;
// b = "Mohit";
// console.log(a);
// console.log(5%10);

function print(){
    var a = "Naman"
    console.log("Hello ",a)
}

print()
console.log(a);
