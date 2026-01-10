function callgym(value,callback,callback1){
    console.log("you are in gym ", value)
    callback()
    callback1("Naman")
}

function goh(){
    console.log("now, Its time to go home")
}

function web(nam){
    console.log("now you need to study web dev",nam)
}

callgym("Naman",goh,web);




// FEtch API

// let URL = "https://official-joke-api.appspot.com/random_joke"
// let jok = document.getElementById('joke')
// let btn = document.getElementById('btn')

// async function getjokes(){
//     let joke = await fetch(URL)
//     let result = await joke.json();
//     jok.innerHTML = `${result.setup} <br> ${result.punchline}`
// }

// btn.addEventListener("click",()=>{
//     getjokes();
// })

// let a = fetch(URL)
//   .then(response => response.json())
//   .then(data => console.log(data));



 

// function server (id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data',id)
//             resolve('success');
//         },5000)
//     })
// }

// const result =async () =>{
//    await server(1)
//    await server(2)
//    await server(3)
//    await server(4)
//    await server(5)
//    await server(6)
// }

// result();

// function database(id){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data",id)
//             resolve("Success")
//         },5000)
//     })
// }

// database(1).then(()=>{
//     database(2).then(()=>{
//         database(3).then(()=>{
//             database(4).then(()=>{               
//             })
//         })
//     })
// })



// function fact(id){
//     let result = 1;
//     for(let i =1; i<=id; i++){
//         result *= i;
//     }
//     console.log(result)
// }

// function calculate(id,callback){
//     callback(id)
// }

//  setTimeout(()=>{
//         calculate(5,fact)
//     },2000)

// setTimeout(()=>{
//     calculate(6,fact)
// },3000)

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

// function nam(){
//     console.log("i run after 5 sec")
// }

// setTimeout(()=>{
//     nam()
// },5000)

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


// let promise = new Promise((resolve,reject)=>{
//     console.log("data");
//     reject("error")
// }) 