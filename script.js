//document.getElementById("count").innerText = 5
let countVar = document.getElementById("countVar")
console.log(countVar)
let count = 0
function increment() {
    count = count + 1
    countVar.innerText = count
    console.log(count )
}
