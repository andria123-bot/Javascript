// function walkDog(){


//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
      
//       const dogWalked = true

//       if(dogWalked){
//         resolve("You walked the dog")
//       }else{
//         reject("You didn't walked the dog")
//       }

//       resolve("You walked the dog")
//     }, 1500);
//   })
// }

// function cleanKitchen(){

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const kitchenCleaned = false

//       if(kitchenCleaned){
//         resolve("You cleaned the kitchen")
//       }else{
//         reject("You didn't clean the kitchen")
//       }

//       resolve("You cleaned the kitchen")
//     }, 2500);
//   })
// }

// function takeOutTrash(){

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const trashTakenOut = true

//       if(trashTakenOut){
//         resolve("You take out the trash")
//       }else{
//         reject("You didn't take the trash")
//       }

//       resolve("You take out the trash")
//     }, 500);
//   })
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the chores!")})
//          .catch(error => console.error(error))


// console.log(Math.PI)
// console.log(Math.round(3.6))
// console.log(Math.floor(3.6))
// console.log(Math.ceil(3.14))
// console.log(Math.abs(3.14))
// console.log(Math.random()) // an 0 an 1
// console.log(Math.max(3, 2, 1))
// console.log(Math.min(3, 2, 1))

// const now = new Date()

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.toISOString())

// let sum = (a, b) => a + b
// console.log(sum(10, 10))

// function greet(name){
//   console.log(`Hello ${name}`)
// }

// greet("Anddriiaa")

// function sum(num1, num2){
//   return num1 + num2
// }

// let a = sum(15, 15)
// console.log(a)

// setTimeout(() => {
//   function multiply(num1, num2){
//     return num1 * num2
//   }

//   const a = multiply(151315235, 235235235)
//   console.log(a)
// }, 5000)

// let heading = document.querySelector('h1')
// let paragraph = document.querySelector('p')

// heading.textContent = "Gay indoeli ar var"
// paragraph.textContent = "Indoelebi mezizgeba"

// let link = document.querySelector('a')
// link.setAttribute("href", "https://www.youtube.com/")

// let newDiv = document.createElement("div")
// newDiv.textContent = "Indoelebi mzzizgewbaaaa"
// document.body.appendChild(newDiv)

// document.querySelector("button").addEventListener("click", () => {
//   alert("Clicked Button")
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         response.json()
//       })
//       .then(data => {
//         console.log(data)
//       })

fetch("https://jsonplaceholder.typicode.com/todos/13333")
    .then(res => res.json())
    .then(data => console.log(data))


// const user = {
//   firstName: "Andria",
//   lastName: "Lezhava"
// }

// const userCopy = JSON.parse(JSON.stringify(user)) // Deep copy of user object
// console.log(user)

// const parsed = JSON.parse('{"A": 1, "B": 2, "C": 3}') // Valid string to object
// const stringified = JSON.stringify({"A": 1, "B": 2, "C": 3}) // Object to JSON string

// console.log("Parsed: ", parsed)
// console.log("Stringified: ", stringified)


// const jsonString = '{"name":"Andria","age":16}';

// const toParse = JSON.parse(jsonString) // Stringed to Parse
// const toString = JSON.stringify(jsonString) // Parsed to String

// console.log("Parsed: ", toParse)
// console.log("Stringed: ", toString)

// '{"name":"Andria","age":16}' => .parse => {"name":"Andria","age":16} Stringify to Parse
// {"name":"Andria","age":16} => .stringify => '{"name":"Andria","age":16}' Parse to Stringify

// console.log("Before Dogwalk");

// function Dogwalk() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const walkedDog = true;

//       if (walkedDog) {
//         resolve("You Walked the Dog! Good boy");
//       } else {
//         reject("You didn't walk the Dog! Bad boy");
//       }
//     }, 5000);
//   });
// }

// function myFucn(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cat = true

//       if(cat){
//         resolve("You Petted cat!")
//       }else{
//         reject("You didin't petted cat!")
//       }
//     })
//   })
// }

// myFucn().then(value => console.log(value))

// function myFunc(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const gavaseirne = true

//       if (gavaseirne){
//         resolve("Wow akustik nodos awame fafa")
//       }else{
//         reject("Ar awame akustik nodos fafa exla gabrazda")
//       }
//     }, 5000)
//   })
// }

// myFunc()
//   .then(nodo => console.log(nodo))

// for(let i = 1; i > 20; i++){
//   print(i)
// }