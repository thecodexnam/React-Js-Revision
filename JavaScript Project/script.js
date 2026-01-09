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

// function calFact(a,callback){
//     callback(a)
// }

// calFact(5,(a)=>{
//     let result = 1;
//     for(let i =1;i<=a;i++){
//         result *= i;
//     }
//     console.log(result);
// })

function nam(){
    console.log("i run after 5 sec")
}

setTimeout(()=>{
    nam()
},5000)

// function database(id,nextdata){
//     setTimeout(()=>{
//     console.log("Data",id);
//     if(nextdata){
//         nextdata()
//     }
//     },2000)

// }

// database(1,()=>{
//     database(2,()=>{
//         database(3)
//     })
// })
