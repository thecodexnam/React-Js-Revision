let box = document.getElementById('box');

let red = document.getElementsByTagName("button")[0]
let green = document.getElementsByTagName("button")[1]
let blue = document.getElementsByTagName("button")[2]
let yellow = document.getElementsByTagName("button")[3]

let fn1 = function(){
    box.style.backgroundColor="red"
}
let fn2 = function(){
    box.style.backgroundColor="green"
}
let fn3 = function(){
    box.style.backgroundColor="blue"
}
let fn4 = function(){
    box.style.backgroundColor="yellow"
}

red.addEventListener('click',fn1)
green.addEventListener('click',fn2)
blue.addEventListener('click',fn3)
yellow.addEventListener('click',fn4)


let x = document.getElementById('mode');

let mode = function(){
    x.classList.toggle("night")
    if(x.classList.contains("night")==true){
    document.body.style.backgroundColor="black"
    document.body.style.color = "white"
    }
    else{
    document.body.style.backgroundColor="white"
    document.body.style.color = "black"
    }

}

x.addEventListener('click',mode)












// let a = document.getElementById("box")


// ja.onclick = function(){
//     alert("External JavaScript Program Run successfully")
// }






// let mul = ()=>{
//    console.log("SetInterval Function is Called") 
// }

// setInterval(mul,2000)






// Some insertAdjacentHTML

// box.insertAdjacentHTML("beforebegin","<h1> beforebegin </h1>")
// undefined
// box.insertAdjacentHTML("afterbegin","<h1> Afterbegin </h1>")
// undefined
// box.insertAdjacentHTML("beforeend","<h1> beforeend </h1>")
// undefined
// box.insertAdjacentHTML("afterend","<h1> after end </h1>")



// document.body.append(box)

// let a = document.createElement('h1')
// a.innerHTML = "I'm Heading 1 Tag"

// box.replaceWith(a)


// some insertion method

// box.append(a)
// box.prepend(a)
// box.before(a)
// box.after(a)
// box.replaceWith(a)