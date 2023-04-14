//document.getElementById("count").innerText = 5
let countVariable = document.getElementById("countVar")
console.log(countVariable)
let count = 0
function increment() {
    count = count + 1
    countVariable.innerText = count
    console.log(count )
}