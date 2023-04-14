//document.getElementById("count").innerText = 5
let saveStr = document.getElementById("countP")
let countVar = document.getElementById("countVar")

let count = 0
function increment() {
    count = count + 1
    countVar.innerText = count
    console.log(count )
}
function save(){
    let countStr=count + "-"

    saveStr.innerText= saveStr.innerText+countStr
    console.log(count)
}