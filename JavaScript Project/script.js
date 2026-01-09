// const sum = (a,b)=>{
//     console.log(a+b)
// }

// function calculate(a,b,callback){
//     callback(a,b)
// }
// calculate(3,7,sum)

// function factorial(a){
//     let result = 1;
//     for(let i =1;i<=a;i++){
//         result *= i;
//     }
//     console.log(result);
// }

function calFact(a,callback){
    callback(a)
}

calFact(5,(a)=>{
    let result = 1;
    for(let i =1;i<=a;i++){
        result *= i;
    }
    console.log(result);
})
