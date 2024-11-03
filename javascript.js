// function increment() {
//      console.log("the button was clicked") }

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// //second race

// countdown()

// function fortyTwo() {
//     console.log(42)
//     }

// fortyTwo()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function laps(){
//     let totalLaps = lap1 + lap2 + lap3
//     console.log(totalLaps)
// }

// laps()

// let lapsCompleted = 0;

// function lapsIncrement(){
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted)
// }

// lapsIncrement()
// lapsIncrement()
// lapsIncrement()

// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let countPass = 0

// function increment(){
//     countPass = countPass + 1
//     countEl.innerText = countPass    
// }

// grab the count-el element, store it in countEl var
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     //set countel's innettext to the count
// }

// // create a function, save() which logs out the count when it's called

// function save() {
//     console.log(count)
// }

// let username = "Angel"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Angel"
// let greeting = "Welcome back "
// welcomeEl.innerText = greeting + name

// welcomeEl.innerText = welcomeEl.innerText + " emoji"

// welcomeEl.innerText += "emoji"

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
count += 1
countEl.textContent = count
}

function save(){
    let entry = count + " - "
    saveEl.textContent += entry
    console.log(count)
    count = 0
    countEl.textContent = 0
}