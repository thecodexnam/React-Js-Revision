let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let hours = document.getElementById('hrs')
let minutes = document.getElementById('mins')
let seconds = document.getElementById('sec')
let date = document.getElementById('dat')
let month = document.getElementById('mon')
let day = document.getElementById('day')
let year = document.getElementById('year')
let ampm = document.getElementById('AM-PM')


setInterval(()=>{  
let time = new Date;
hours.innerHTML=time.getHours()
minutes.innerHTML=time.getMinutes()
seconds.innerHTML = time.getSeconds()
date.innerHTML=time.getDate()
month.innerHTML = months[time.getMonth()]
day.innerHTML= days[time.getDay()]
year.innerHTML=time.getFullYear()
ampm.innerHTML=time.getHours()>=12?'PM':'AM'
},1000)
