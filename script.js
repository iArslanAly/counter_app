//document.getElementById("count").innerText = 5
let saveStr = document.getElementById("countP")
let countVar = document.getElementById("countVar")

let count = 0
function increment() {
    count = count + 1;
    countVar.innerText = count;
    console.log(count )
}
function save(){
    let countStr = count + " - ";
// innerText replaced with textContent for better results
    saveStr.textContent = saveStr.textContent + countStr;
    console.log(count)
    // for reset the values we do
    countVar.textContent = 0;
    count = 0;
}