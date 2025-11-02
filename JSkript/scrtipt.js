// const div = document.getElementById('div')
// const button = document.getElementById('Button1')

// const { useInsertionEffect } = require("react")

// button.addEventListener('click', () => {
//   console.log("Clicked")
// })

// let i = 0

// function handleSubmit(){
//   console.log("Submited")
//   i += 1
//   H1.innerHTML = `
//     Clicked ${i}
//   `
// }

// let i = 0

// function handleIncrease(){
//   i += 1
//   H1.innerHTML = `Count: ${i}`
// }

// function handleReset(){
//   i = 0
//   H1.innerHTML = `Count: ${i}`
// }

// function handleDecrease(){
//   i -= 1
//   H1.innerHTML = `Count: ${i}`
// }



// function handleFetch() {
//   div.innerHTML = '';

//   for (let i = 1; i < 6; i++) {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
//       .then(res => res.json())
//       .then(data => {
//         div.innerHTML += `
//           <p>
//             <strong>Id:</strong> ${data.id}<br>
//             <strong>Title:</strong> ${data.title}<br>
//             <strong>Completed:</strong> ${data.completed}<br><br>
//           </p>
//         `;
//       })
//       .catch(err => console.error('Fetch error:', err));
//   }
// }

// function handleSubmit(e){
//   e.preventDefault()

//   const form = e.form
//   const username = form.elements['username'].value
//   const email = form.elements['email'].value

//   console.log(`Ur username is: ${username} and ur email is: ${email}`)

//   localStorage.setItem("username", username)
//   localStorage.setItem("email", email)
// }

// document.getElementById('Form').addEventListener('submit', handleSubmit)

// let name = prompt("What is ur name?: ", "Guest")

// console.log("Hello " + name)

// let isSure = confirm("Are you sure you want to delete this?");

// if(isSure){
//   alert("Deleted site!")
// }else{
//   alert("Didnt deleted site!")
// }

// console.log(parseInt("123"))
// console.log(parseInt("asd123"))
// console.log(parseInt("123asd"))

// console.log(parseFloat("123.123"))
// console.log(parseFloat("asd123.123"))
// console.log(parseFloat("123.123asd"))

`⚠ Important notes:
✅ Both functions ignore leading spaces.
✅ Both stop parsing at the first character that isn’t part of a valid number.
✅ If no valid number is found at the start → returns NaN.
✅ parseInt can take a radix to specify the base (e.g., 2, 8, 10, 16).`

// console.log(isFinite(123))
// console.log(isFinite("123"))
// console.log(isFinite("Hello"))
// console.log(isFinite("123Hello"))

// console.log(Number("123"))
// console.log(Number("asd123"))
// console.log(Number("123asd"))

// console.log(1.59.toFixed(1))
// console.log(1.593.toFixed(2))
// console.log(1.5934.toFixed(3))

// console.log(13.41.toPrecision(1))

console.log(Math.abs(5))
console.log(Math.abs(-5))

Math.ceil(4.4)
Math.ceil(-4.4)