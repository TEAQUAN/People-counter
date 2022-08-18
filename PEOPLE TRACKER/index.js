// // // to comment  highlighted lines of code: cmtrl +  k + c
// // //  let MyAge = 7
// // //  let humanDogRatio = 5
// // //  let myDoGage = MyAge * humanDogRatio
// // //  myDoGage = 73
// // // console.log(myDoGage)
// // // let bonusPoints = 50
// // // bonusPoints = bonusPoints +50
// // // bonusPoints = bonusPoints - 75
// // // bonusPoints = bonusPoints + 45
// // // console.log(bonusPoints)
// // // initialize the count as 0
// // // listen for clicks on the increment button
// // // increment the count variabl when the button is clicked
// // // change the count-el in the html to reflect the new count
// // // function youdecideaname () {
// // //     console.log(42)
// // // }
// // // youdecideaname()

// // // let lap1 = 34
// // // let lap2 = 33
// // // let lap3 = 36
// // // function sumlog () {
// // //     console.log(lap1 + lap2 + lap3)
// // // }
// // // sumlog()
// // // let lapscompleted  = 0
// // // function increments () {
// // //    lapscompleted = lapscompleted + 1
// // //    console.log(lapscompleted)
// // // }
// // // increments()
// // // increments()
// // // increments()
// // let CountEl = document.getElementById("count-el")
// // console.log(CountEl)
// // let count = 0
// // function increment() {
// //     count = count + 1
// //    CountEl.innerText = count
// // }

// // function save () {
// //     console.log(count)
// // }
// let username = "per"
// let message = "You have three new notifications"
// console.log(message + username)
// let messageToUser = message + username
// console.log(messageToUser)
// let name = "Tobi"
// let greeting = "Hi my name is "

// let NameGreeting = greeting + name
// console.log(NameGreeting)

let welcomeEl = document.getElementById("welcome-el")
//let name = "Tobi"
//let greeting = "Hi my name is "
//greeting = "Hi my name is 😂"
//welcomeEl.innerText = greeting +  name

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment () {
    count += 1
    countEl.innerText = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}

// let firstName = "Tobi"
// let lastName = "Adekunle"
// let fullName = firstName + lastName
// console.log(fullName)

// let name = "Linda"
// let greeting = "Hi there"

// function called() {
// let nameGreeting = greeting + name
// console.log(nameGreeting)
// }
// called()

// let myPoints = 3
// function add3Points() {
//     myPoints = myPoints + 3
//     console.log(myPoints)
// }
// add3Points()
// function removePoint() {
//     myPoints = myPoints - 1
//     console.log(myPoints)
// }
// removePoint()

// let errorParagraph = document.getElementById("error-el")
// console.log(errorParagraph)
// function errorMessage() {
//     console.log("button clicked")
//    errorParagraph.textContent = "Something went wrong, error"
// }


// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let spanel = document.getElementById("sum-el")


// function Sum() {
// let addition =   num1 + num2
// spanel.textContent = "RESULT: " + addition
// console.log(addition)
// }
// function Subtract() {
//     let subtraction =  num1 - num2
//     spanel.textContent = "RESULT: " + subtraction
// }
// function Divide() {
//     let division =   num1 / num2
//     spanel.textContent = "RESULT: " + division
//     console.log(division)
// }
// function Multiply() {
//     let multiplication =  num1 * num2
//     spanel.textContent = "RESULT: " + multiplication
//     console.log(multiplication)
// }
// let oldage = 100
// if (oldage<100) {
//     console.log("Not eligible")
// } else if (oldage===100){
//     console.log("Here is your birthday card from the king!")
// }

// let age = 17  
// if (age < 22) {
//     console.log("you are underage")
// } else if (age >= 22) {
//     console.log(" you are welcome")
// }




// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJck= false
// let isAlive = true
// let message = ""
// if (sum <= 20 ) {
// message = "Do uyou want to draw a new card"
// } else if (sum===21 ) {
// message = "woohoo! youve got a blackjack"
// hasBlackJck = true
// } else {
// message = "you are out of the game"
// isAlive= false
// }
// console.log(hasBlackJck)
// console.log(isAlive)
// console.log(message)
//  // control + d to select several words
// let player1Time = 102
// let player2Time = 107
//  function getFastestRaceTime() {
//      if (player1Time < player2Time) {
//          return player1Time
//      } else if (player2Time < player1Time) {
//          return player2Time
//      } else {
//          return player1Time
//      }
//  }

//  function totalRaceTime() {
//     return player1Time + player2Time
//  }
//  let fastesttime = totalRaceTime()
//   console.log (fastesttime)

  