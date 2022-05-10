//document.getElementById("count-el").innerText = 6


let countEL = document.getElementById("count-el")
let count = 0
console.log(count)

function increment() {
    console.log("the button was clicked")
    count = count + 1
    countEL.innerText = count
}