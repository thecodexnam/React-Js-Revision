

// if(val>=10 && val <=20){
//     console.log("person lies between 10 and 20")
// }
// else{
//     console.log("person not lies between 10 and 20")
// }


// function checkRange(value, rangeStart, rangeEnd) {
//     if (value >= rangeStart && value <= rangeEnd) {
//         return true;
//     } else {
//         return false;
//     }
// }

// if (checkRange(val, 10, 20)) {
//     console.log("person lies between 10 and 20");
// } else {
//     console.log("person not lies between 10 and 20");
// }


// function add(a,b){
//     console.log("I have both "+a,b)
// }

// add("Hindi","Hindi Grammer")


// let correctNumber = 7;
// let userNumber;
// let arr = [];

// do {
//     userNumber = Number(prompt("Enter the correct number"));

//     if (userNumber !== correctNumber) {
//         arr.push(userNumber);   3
//     }
// } while (userNumber !== correctNumber);

// console.log("Wrong attempts:", arr);

// let a = "Naman"
// let b = "Yadav"
// let arr = [12,122,123,23,24,32]

// let arr1 = arr.toString()
// console.log(arr1)
// console.log(arr)

// let arr = [
//     { Name: "Naman",
//       course:["BCA","NIELIT"] 
//     },
//     { Name: "Vishnu",
//       course:"BCa"  
//     }
// ]

const TVD = ['Stefen','Damon','Elena','Caroline']

let num = [21,32,43,54,65,76]
let array = ['Naman','Yadav',123,true]


for(const [Index,characters] of TVD.entries()){
    console.log(Index,characters);
}

array.forEach(element => {
    console.log(`Hello, ${element}`);
});

array.map((element)=>{
    console.log(`Hi, ${element}`);
});

num.filter((element)=>{
    console.log(element/3);
});





