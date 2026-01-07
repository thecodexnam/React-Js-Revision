let box = document.createElement('div')
box.className = "naman"
box.innerHTML = "<h1>Naman Yadav</h1>"
document.body.append(box)

let a = document.createElement('h1')
a.innerHTML = "I'm Heading 1 Tag"

box.replaceWith(a)