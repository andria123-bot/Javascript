/*
console.log(`Hello`);
console.log(`I Like Pizza!`);

window.alert(`This is  an alert!`);
window.alert(`I like pizza!`);

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza!`;

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof gpa)
console.log(`you are ${age} years old`);
console.log(`The price is $${price}`)
console.log(`you gpa is: ${gpa}`)


let firstName = "Andria";
let favoriteFood = "Pizza";
let email = "andria.lezhava660@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`)

let online = true;
let forSale = false;
let isStudent = true;

console.log(`Andria is online ${online}`);
console.log(`Is this car for sale: ${forSale}`)
console.log(`Enrolled: ${isStudent}`)

let fullName = "Andria Lezhava";
let age = 15;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p1").textContent = `You are ${age} years old`;
document.getElementById("p1").textContent = `Are you student: ${isStudent}`;

let students = 30;

students = students - 1;
students = students + 1;
students = students * 2;
students = students / 2;
students = students ** 1;
let extraStudents = students % 3;

students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

students++;
students--;

console.log(students);

let resoult = 1 + 2 * 3 + 4 ** 2;
console.log(resoult)

let username;
username = window.prompt("What's your username?")

let username;

document.getElementById("mySumbit").onclick = function(){
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`
}

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(x);
z = Boolean(x);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySumbit").onclick = function(){
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
}

console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let y = 2;
let z;

z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);
z = Math.trunc(x);
z = Math.pow(x, y);
z = Math.sqrt(x);
z = Math.log(x);
z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);
z = Math.abs(x);
z = Math.sign(x);
z = Math.max(x, y, z);
z = Math.min(x, y, z);


console.log(z)


Random Number Generator Console.log


const max = 100;
const min = 20;

let randomNum = Math.floor(Math.random() * (max - min)) + 1;

console.log(randomNum)

let age = 25;

if(age >= 18){
  console.log("You Can Enter This Site");
}
else{
  console.log("You Must Be An 18+ Enter This Site");
}

let time = 9;

if(time < 12){
  console.log("Good Morning!");
}
else{
  console.log("Good Afternoon")
}

let isStudent = false;

if(isStudent){
  console.log("You are student!");
}

else{
  console.log("You are not student!")
}

let hasLicense = false;

if (age >= 16){
  console.log("You Can Drive Car");
  
  if(hasLicense){
    console.log("You have your license!");
  }
  else{
    console.log("You do not have your license yet!")
  }
}

else{
  console.log("You must be an 16+ to have license");
}

const myText = document.getElementById("myText");
const mySumbit = document.getElementById("mySumbit");
const resoultElement = document.getElementById("resoultElement");
let age = 25;

mySumbit.onclick = function(){

  age = myText.value;
  age = Number(age);
  if(age >= 100){
    resoultElement.textContent = "You Are TOO OLD To Enter This Site";
  }
  else if(age == 0 ){
    resoultElement.textContent ="You Cant Enter. You Were Just Born"
  }
  
  else if(age >= 18){
    resoultElement.textContent = "You Can Visit Our Site!"
  }
  else if(age < 0){
    resoultElement.textContent = "Your Age Cant Be Below 0!"
  }
  else{
    resoultElement.textContent = "You Must Be 18+ To Enter This Site"
  }
}

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySumbit = document.getElementById("mySumbit");
const subResoult = document.getElementById("subResoult");
const paymentResoult = document.getElementById("paymentResoult");

mySumbit.onclick = function(){
  if(myCheckBox.checked){
    subResoult.textContent = `Your are subscribed!`;
  }
  else{
    subResoult.textContent = `Your are not subscribed!`;
  }
  if(visaBtn.checked){
    paymentResoult.textContent = `You are playing with Visa`;
  }
  else if(masterCardBtn.checked){
    paymentResoult.textContent = `You are playing with MasterCard`;
  }
  else if(payPalBtn.checked){
    paymentResoult.textContent = `You are playing with PayPal`;
  }
  else{
    paymentResoult.textContent = `You must select a payment type!`;
  }
}

let age = 21;
let message = age >= 18 ? "You're adoult" : "You're a minor";
let message;

if(age >= 18){
  message = "You're an adoult"
}
else{
  message = "You're an minor"
}

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!"

let isStudent = true;
let message = isStudent ? "You are student" : "You are not a student";
console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ?  10 : 0;
console.log(`Your total is $${purchaseAmount = purchaseAmount *(discount / 100)}`);

let day = 1;

switch(day){
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Thuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thursday");
    break;
  case 5:
      console.log("It is Friday");
      break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log(`${day} is not a day`)
}

let testScore = 92;
let letterGrade;
switch(true){
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >=  80:
    letterGrade = "B";
    break;
  case testScore >=  70:
    letterGrade = "C";
    break;
  case testScore >=  60:
    letterGrade = "D";
    break;
  case testScore >=  50:
    letterGrade = "E";
    break;
  default:
    letterGrade = "f";
}

console.log(letterGrade)

let userName = "AndriA";

phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
let resoult = userName.replaceAll("-");
let resoult = userName.includes(" ");
let resoult = userName.endsWith(" ");
let resoult = userName.startsWith(" ");
console.log(userName.charAt(0));
userName = userName.trim();
console.log(userName.length);
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);

console.log(userName)
console.log(resoult)

if(resoult){
  console.log("Your username can't end begin with ' '");
}
else{
  console.log(userName);
}

let phoneNumber = "599-89-86-16";

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber)

const fullName = "Andria Lezhava";

let firstName = fullName.slice(0, 2);
let lastName = fullName.slice(4, 8);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-4);
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastname = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName)
console.log(firstName)

let email = "andria.lezhava660@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName)
console.log(extension)

let userName = window.prompt("Enter your username: ")

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter + extraChars;

console.log(userName);

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);

const temp = 200;

if(temp <= 0 && temp <= 30){
  console.log('Weather is GOOD');
}

else{
  console.log('Weather is BAD');
}

const isSunny = true;

if(isSunny){
  console.log("It is SUNNY");
}
else{
  console.log("It is CLOUDY");
}

const PI = 3.14;

if(PI === 3.14){
  console.log("This is PI");
}
else{
  console.log("That is not PI");
}

let userName = "";

while(userName === "" || userName === null){
  userName = window.prompt(`Enter your name`)
}

console.log(`Hello ${userName}`);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
  username = window.prompt(`Enter your username`)
  password = window.prompt(`Enter your password`)

  if(username === "myUsername" && password === "myPassword"){
    loggedIn = true;
    console.log("You are logged in!");
  }
  else{
    console.log("Invalid credentials! Pleace try agan")
  }
}

for(let i = 0; i <= 2; i++){
  console.log(i)
}

console.log("HAPPY NEW YEAR!!!")

for(let i = 1; i <= 20; i ++){
  
  if(i == 13){
    continue;
  }
  else{
    console.log(i);
  }
}


function  happyBirthday(username, age){
  console.log("Happy birthday to you!")
  console.log("Happy birthday to you!")
  console.log(`Happy birthday dear ${username}`)
  console.log("Happy birthday to you!")
  console.log(`You are  ${age} years old`)
}

happyBirthday("Andria", 15);
happyBirthday("Spongebob", 31);
happyBirthday("Patrick", 35)

function add(x, y){
  return x + y;
}

function subtract(x, y){
  return x - y;
}

function multiply(x, y){
  return x * y;
}

function devide(x, y){
  return x / y;
}
function isEven(number){

  if(number % 2 === 0){
    return true;
  }
  shortcut return number % 2 == 0 ? true: false;
  else{
    return false;
  }
}

function isValidEmail(email){

  if(email.includes("@")){
    return true;
  }
  else{
    return false;
  }
  shortcut return email.includes("@") ? true : false;
}

console.log(isValidEmail("andria.lezhava660@gmail.com"))



function function1(){
  let x = 1;
  console.log(x);
}
function function2(){
  let x = 2;
  console.log(x);
}

let fruits = ["Apple", "Orange", "Banana", "Cherry"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.push("Coconut");
fruits.pop();
fruits.unshift("Mango");
fruits.shift();
fruits.length;
fruits.sort();
fruits.reverse();

let numOfFruits = fruits.length;
let index = fruits.indexOf('Apple');

for(let i = fruits.length; i >= 0; i++){
  console.log(fruits[i]);
}

for(let fruit of fruits){
  console.log(fruit);
}


let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers)

console.log(maximum)

let username = "Andria";
let letters = [...username].join("-");

console.log(letters);


let fruits = ["Apple", "Orange", "Banana", "Cherry"];
let vegetables = ["Carrots", "Potatos", "Cucumber"]

let foods = [...fruits, ...vegetables, "Eggs", "Milk"];


console.log(foods);

function openFrifge(...foods){
  console.log(...foods);
}
function getFood(...foods){
  return foods;
}

const food1 = "Pizza";
const food2 = "Hotdog";
const food3 = "Hamburger";
const food4 = "Pasta";
const food5 = "Xinkali";

openFrifge(food1, food2, food3, food4, food5);


const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

function sum(...numbers){
  let resoult = 0;

  for(let numbers of numbers){
    resoult += numbers;
  }
  return resoult;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Yoyr total i $${total}`);


function sum(...numbers){
  let resoult = 0;

  for(let numbers of numbers){
    resoult += numbers;
  }
  return resoult;
}

function getArveage(...numbers){
  let resoult = 0;

  for(let numbers of numbers){
    resoult += numbers;
  }
  return resoult / numbers.length;
}

const total = getArveage(75, 100, 85, 90, 50);

console.log(total)

function combineStrings(){
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName)


function hello(){
  setTimeout(function(){
    console.log('Hello!');
  }, 3000);
}

hello(goodbye);

function hello(callback){
  console.log('Hello!');
  callback();
}

function wait(){
  console.log('Wait!')
}

function leave(){
  console.log('Leave!')
}

function goodbye(){
  console.log('Goodbye!');
}

sum(displayConsole, 1, 2);

function sum(callback, x, y){
  let resoult = x + y;
  callback(resoult);
}

function displayConsole(resoult){
  console.log(resoult);
}

function displayPage(resoult){
  document.getElementById("myH1").textContent = resoult;
}

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(square);
numbers.forEach(triple);
numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
  array[index] = element * 2;
}

function triple(element, index, array){
  array[index] = element * 3;
}

function square(element, index, array){
  array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
  array[index] = Math.pow(element, 3);
}

function display(element){
  console.log(element);
}

let fruits = ["apple", "coconut", "banana", "orange"];

fruits.forEach(capitalize)
fruits.forEach(lowerCase);
fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
  console.log(element)
}

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes)

function square(element){
  return Math.pow(element, 2)
}

function cube(element){
  return Math.pow(element, 3)
}

const students = ["Andria", "Gio", "Nika", "Saba"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper)

function upperCase(element){
  return element.toUpperCase();
}

function lowerCase(element){
  return element.toLowerCase();
}

const dates = ["2024-1-10", "2020-3-11", "2009-3-11"];
const formattedDates = dates.map(formatDates);

console.log(formatDates);

function formatDates(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);

function isEven(element){
  return element % 2 === 0;
}

function isOdd(element){
  return element % 2 !== 0;
}

const ages = [16, 17, 18, 19, 20, 60];
const adoults = ages.filter(isAdoult);
const children = ages.filter(isChild);

console.log(adoults)

function isAdoult(element){
  return element >= 18;
}

function isChild(element){
  return element < 18;
}

const words = ["apple", "kiwi", "banana", "orange", "coconut"];
const ShortWords = word.filter(getShortWords);
const longWords = word.filter(getLongWords);

console.log(longWords)

function getShortWords(element){
  return element.lenght <= 6;
}

function getLongWords(element){
  return element.lenght > 6;
}

const  prices = [30, 12, 14, 10, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
  return accumulator + element
}

const  grades = [30, 12, 14, 10, 15, 20];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
  return Math.max(accumulator, element);
}

function getMin(accumulator, element){
  return Math.min(accumulator, element);
}

const hello = function(){
  console.log("Hello");
}

hello();

setTimeout(function(){
  console.log("Hello!");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
  return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
  return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element){
  return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
  return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, element){
  return accumulator + element;
});


console.log(square);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);

function hello(){
  console.log("Hello");
}

const hello = function(){
  console.log("Hello");
}

const hello = (name) => {console.log(`Hello ${name}`)
                          console.log(`You are ${age} years old`)};


hello("Andria", 15);

setTimeout(hello, 3000);

function hello(){
  console.log("Hello");
}

setTimeout(function(){
  console.log("Hello");
}, 3000);

setTimeout( () => console.log("Hello"), 3000);

const  numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(evenNums);
console.log(oddNums);
console.log(total);
console.log(cubes);

const person1 = {
  firstName: "Andria",
  lastName: "Lezhava",
  age: 30,
  isEmployed: false,
  sayHello: function(){console.log("Hello I Am Andria Lezhavva")},
  eat: function(){console.log("I Am Eating JellyBeans")},
}

const person2 = {
  firstName: "Salome",
  lastName: "Lezhava",
  age: 21,
  isEmployed: true,
  sayHello: () => console.log("Hello I Am Salome Lezhavva"),
  eat: () => console.log("I Am Eating JellyBeans"),
}

person1.sayHello()
person2.sayHello()
person1.eat()
person2.eat()

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);


console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

console.log(this);

const person1 = {
  name: "Andria",
  favFood: "Pizza",
  sayHello: function(){console.log(`Hi I Am ${this.name}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

const person2 = {
  name: "Andria",
  favFood: "Pizza",
  sayHello: function(){console.log(`Hi I Am ${this.name}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.eat();
person2.eat();

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function(){console.log(`You drive the ${this.model}`)}

}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camaro", 2023, "Blue");
const car3 = new Car("Dodge", "Charger", 2013, "White");


console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();



class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  
  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("UnderWear", 100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (With tax): $${total.toFixed(2)}`)



class MathUtil{
  static PI = 3.14154;

  static getDiameter(radius){
    return radius * 2;
  }

  static getCircumference(radius){
    return 2 * this.PI * radius;
  }

  static getArea(radius){
    return 2 * this.PI * radius;
  }

}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User{
  static userCount = 0;

  constructor(username){
    this.username = username;
    User.userCount++;
  }

  static getUserCount(){
    console.log(`There are ${user.userCount} users online`)
  }

  sayHello(){
    console.log(`Hello, my username is ${this.username}`)
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Spongebob");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();

user.getUserCount();


class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`)
  }
  eat(){
    console.log(`This ${this.name} is sleeping`)
  }
}

class Rabbit extends Animal{
  name = "Rabbit";

  run(){
    console.log(`This ${this.name} is running`)
  }
}

class Fish extends Animal{
  name = "fish";

  swim(){
    console.log(`This ${this.name} is swimming`)
  }
}

class Hawk extends Animal{
  name = "hawk";
  fly(){
    console.log(`This ${this.name} is flying`)
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();



class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  move(speed){
    console.log(`The ${this.name} mooves at speed of ${speed}mph`);
  }
}

class Rabbit extends Animal{

  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }
  run(){
    console.log(`The ${this.name} can run`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal{

  constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim(){
    console.log(`The ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

class Hawk extends Animal{

  constructor(name, age, flySpeed){
    super(name, age);
    this.flySpeed = flySpeed;
  }
  fly(){
    console.log(`The ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);


console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();



class Rectangle{

  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  set width(newWidth){
    if(newWidth > 0){
      this._width = newWidth;
    }else{
      console.error("Width must be a positive number")
    }
  }

  set height(newHeight){
    if(newHeight > 0){
      this._height = newHeight;
    }else{
      console.error("Height must be a positive number")
    }
  }

  get width(){
    return `${this._width.toFixed(1)}cm`;
  }
  get height(){
    return `${this._height.toFixed(1)}cm`;
  }

  get area(){
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }


const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
}

class Person{
  
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName){
    if(typeof newFirstName === "string" && newFirstName.length > 0){
      this._firstName = newFirstName;
    }else{
      console.error("First name must be a non-empty string")
    }
  }
  set lastName(newLastName){
    if(typeof newLastName === "string" && newLastName.length > 0){
      this._lastName = newLastName;
    }else{
      console.error("Last name must be a non-empty string")
    }
  }
  set age(newAge){
    if(typeof newAge === "number" && newAge >= 0){
      this._age = newAge;
    }else{
      console.error("age name must be a non-negative number")
    }
  }
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get fullName(){
    return this._firstName + " " + this._lastName;
  }
  get age(){
    return this._age;
  }
}

const person = new Person("Andria", "Lezhava", 15);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);


const colors = ["red", "Green", "Blue", "Black", "White"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors)


const colors = ["red", "Green", "Blue", "Black", "White"];

const [firstColor, secendColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secendColor);
console.log(thirdColor);
console.log(extraColors);

const person1 = {
  firstName: "Andria",
  lastName: "Lezhava",
  age: 15,

}

const person2 = {
  firstName: "Giorgi",
  lastName: "Lezhava",
  age: 29,
  job: "Youtuber"
}

const {firstName, lastName, age, job = "Unemployed"} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
  console.log(`name: ${firstName}, lastname: ${lastName}`);
  console.log(`name: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstName: "Andria",
  lastName: "Lezhava",
  age: 15,
}

const person2 = {
  firstName: "Giorgi",
  lastName: "Lezhava",
  age: 29,
  job: "Youtuber"
}

displayPerson(person1);


const person = {
  fullName: "Andria Lezhava",
  age: 15,
  isStudent: true,
  hobbies: ["Programming", "Cyling", "Fishing"],
  addres: {
    street: "kvesetis 4a",
    city: "Tbilisi",
    country: "Georgia"
  }
}

for(const property in person.addres){
  console.log(person.addres[property]);
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.addres.street);

class Person{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address{
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Andria", 15, "Kvesetis 4a", "Tbilisi", "Georgia");

const person2 = new Person("Giorgi", 29, "Kvesetis 4a", "Tbilisi", "Georgia");

const person3 = new Person("Ksenia", 55, "Kvesetis 4a", "Tbilisi", "Georgia");

console.log(person1.address.country);

const fruits = [{name: "Apple", color: "Red", calories: 95},
                {name: "Orange", color: "Orange", calories: 45},
                {name: "Banana", color: "Yellow", calories: 105},
                {name: "Coconut", color: "White", calories: 95},
                {name: "Pineapple", color: "Yellow", calories: 37}];

fruits.push({name: "Grapes", color: "purple", calories: 62});
fruits.pop();
console.log(fruits[3].color);
fruits.splice(1, 2);
console.log(fruits);

fruits.forEach(fruits => console.log(fruits.calories));
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

const yellowFruits = fruits.filter(fruit => fruit.color === "Yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const hightCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(hightCalFruits);

const maxFruit = fruits.reduce( (max, fruit) =>
                                fruit.calories >
                                max.calories ?
                                fruit : max);
const minFruit = fruits.reduce( (min, fruit) =>
                                fruit.calories <
                                min.calories ?
                                fruit : min);

console.log(maxFruit);
console.log(minFruit);

let fruits = ["Apple", "Orange", "Banana", "Cherry"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);

fruits.sort();
console.log(fruits);
console.log(numbers);

const people = [{name: "Andria", age: 15, gpa: 3.1},
                {name: "Idk1", age: 45, gpa: 1.1},
                {name: "Idk2", age: 35, gpa: 34},
                {name: "Idk3", age: 55, gpa: 0.1}];

people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

const cards = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, 'Q', `K`];

shuffle(cards);

console.log(cards);

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}


const date = new Date(2024, 0, 1, 2, 3, 4, 5);
const date = new Date("2024-01-02T12:00:00Z");
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const mins = date.getMinutes();
const secend = date.getSeconds();
const milisec = date.getMilliseconds();
const dayOfWeek = date.getDay();

console.log(date);
console.log(year);
console.log(day);
console.log(mins);
console.log(secend);
console.log(milisec);
console.log(dayOfWeek);

const date = new Date();

date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);

const date1 = new Date("2023-11-31");
const date2 = new Date("2024-01-01");

if(date2 > date2){
  console.log("Happy New Year!!!");
}else{
  console.log("Happy New Day!")
}

function outer(){
  let message = "Hello";
  function inner(){
    console.log(message)
  }
  inner();
}
outer();

function createCounter(){
  let count = 0;

  function increment(){

    count++
    console.log(`Count increased to ${count}`);
  }

  function getCount(){
    return count;
  }

  return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`)

function createGame(){
  let score = 0;

  function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore(){
    return score;
  }

  return{increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}`);

setTimeout(function(){window.alert(`Hello`)}, 3000);

const timeoutId = setTimeout(() => window.alert(`Hello`), 3000);

clearTimeout(timeoutId);

let timeoutId;

function startTimer(){
  timeoutId = setTimeout(() => window.alert(`Hello`), 3000)
  console.log(`Started`)
}
function clearTimer(){
  clearTimeout(timeoutId);
  console.log(`Cleared`)
}





import{PI, getCircumference, getArea, getVolume} from './mathUthil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);





function func1(callback){
  setTimeout(() => {console.log("Task1");
                    callback()}, 3000);
}
function func2(){
  console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
}

func1(func2);


error handling
try{
  console.log("Hello");
  // NETWORK ERRORS
  // PROMISE REJECTION
  // SECURITY ERRORS
}
catch(error){
  console.error(error);
}
finally{
  // CLOSE FILES
  // CLOSE CONNECTIONS
  // RELEASE RESOURCES
  console.log("This always executes");
}

console.log("You have reached the end");

try{
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if(divisor == 0){
    throw new Error("You cant devide by zero!");
  }
  if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("Values must be a number!")
  }

const resoult = dividend / divisor;
console.log(resoult);
}
catch(error){
  console.error(error);
}

console.log("You have reached the end");

document.title = "My Website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

console.dir(document);
console.log(document);

const username = "Andria Lezhava";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

1. document.getElementById()       // ELEMENT OR NULL
2. document.getElementsClassName() // HTML COLLECTION
3. document.getElementsByTagName() // HTML COLLECTION
4. document.querySelector()        // ELEMENT OR NULL
5. document.querySelectorAll()     // NODELIST

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "Yellow";
myHeading.style.textAlign = "Center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.backgroundColor = "Yellow";
fruits[1].style.backgroundColor = "Red";
fruits[2].style.backgroundColor = "Green";

for(let fruit of fruits){
  fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit => {
  fruit.style.backgroundColor = "Yellow";
})

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

h4Elements[0].style.backgroundColor = "Yellow";

for(let h4Element of h4Elements){
  h4Element.style.backgroundColor = "Yellow"
}

for(let liElement of liElements){
  liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach(h4Element => {
  h4Element.style.backgroundColor = "Yellow";
})

Array.from(liElements).forEach(liElement => {
  liElement.style.backgroundColor = "lightgreen";
})

const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow";

const fruits = document.querySelectorAll(".fruits");
const foods = document.querySelectorAll("li");

foods.forEach(food => {
  food.style.backgroundColor = "Yellow";
})

fruits[0].style.backgroundColor = "yellow"
foods[0].style.backgroundColor = "yellow"


const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "Yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "Yellow";
});

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "Yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
  const lastChild = ulElement.lastElementChild;
  lastChild.style.backgroundColor = "Yellow";
})

const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "Yellow";

const element = document.getElementById("Orange");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "Yellow";

const element = document.getElementById("Apple");
const parent = element.parentElement;
parent.style.backgroundColor = "Yellow";

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
  child.style.backgroundColor = "Yellow";
});


children[1].style.backgroundColor = "Yellow";



// // Step 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\ \\


const newH1 = document.createElement("h1");
const newListItem = document.createElement("li");


// // Step 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\ \\


newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.textContent = "Coconut";
newListItem.style.backgroundColor = "lightgreen"
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "Tomato";
newH1.style.textAlign = "Center";


// // Step 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\ \\


document.body.append(newListItem);
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);
document.body.append(newH1);  down
document.body.prepend(newH1);  up
document.getElementById("box1").append(newH1);
document.getElementById("box1").append(newH1);
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);
document.getElementById("fruits").append(newListItem);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[1]);


// Remove Html Elements ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\ \\

document.getElementById("box1").removeChild(newH1);
document.body.removeChild(newH1);

document.getElementById("fruits").removeChild(newListItem);

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");


// myButton.addEventListener("click", event =>{
//   event.target.style.backgroundColor = "Tomato";
//   myBox.textContent = "Ouch! 🤕";
// });

// myButton.addEventListener("mouseover", event =>{
//   event.target.style.backgroundColor = "Yellow";
//   myBox.textContent = "Dont Do It! 🤫";
// });

// myButton.addEventListener("mouseout", event =>{
//   event.target.style.backgroundColor = "lightgreen";
//   myBox.textContent = "Click Me! 😀";
// });

const myBox = document.getElementById("myBox");
const moveAmount = 10;

let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
  if(event.key.startsWith("Arrow")){
    switch(event.key){
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
})

document.addEventListener("keydown", event =>{
  myBox.textContent = "😄"
  myBox.style.backgroundColor = "tomato"
});

document.addEventListener("keyup", event =>{
  myBox.textContent = "😀"
  myBox.style.backgroundColor = "lightblue"
});

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
  button.style.backgroundColor = "Green";
  button.textContent += "😁"
});

buttons.forEach(button =>{
  button.addEventListener("click", event =>{
    event.target.style.backgroundColor = "Tomato";
  })
});

buttons.forEach(button => {
  button.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "hsl(205, 100%, 30%)"
  })
});

buttons.forEach(button => {
  button.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "hsl(205, 100%, 60%)"
  })
});

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");


buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons)
  });
});

const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
  event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
  event.target.classList.toggle("hover");
});

myH1.classList.add("enabled");
myButton.classList.add("enabled");

myH1.addEventListener("click", event => {

  if(event.target.classList.contains("disabled")){
    event.target.textContent += "🤑";
  }else{
    event.target.classList.replace("enabled", "disabled");
  }
});

myButton.addEventListener("click", event => {

  if(event.target.classList.contains("disabled")){
    event.target.textContent += "🤑";
  }else{
    event.target.classList.replace("enabled", "disabled");
  }
});

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(buttons =>{
  buttons.classList.add("enabled");
});

buttons.forEach(buttons =>{
  buttons.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach(buttons =>{
  buttons.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach(button => {
  button.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
      event.target.textContent += "🤑"
    }else{
      event.target.classList.replace("enabled", "disabled");
    }
  });
});

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}


function task3(callback){
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 3000);
};

function task4(callback){
  setTimeout(() => {
    console.log("Task 4 complete");
    callback();
  }, 1500);
};

task1(() => {
  task2(() =>{
    task3(() => {
      task4(() => {
        console.log("All Tasks Completed!");
      });
    });
  });
});

function walkDog(){

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const dogWalked = true;

      if(dogWalked){
        resolve("You walked the dog");
      }else{
        reject("You didint walked the dog");
      };

    }, 1500);
  });
};

function cleanKitchen(){

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const kitchenCleaned = true;

      if(kitchenCleaned){
        resolve("You cleaned the kitchen");
      }else{
        reject("You didint cleaned the kitchen");
      };

    }, 2500);
  });
};

function takeOutTrash(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const trashTakenOut = false;

      if(trashTakenOut){
        resolve("You take out the trash");
      }else{
        reject("You didint take out trash");
      }
    }, 500);
  });
};

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); return console.log("you finished all the taskes")})
        .catch(error => console.error(error));

function walkDog(){

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const dogWalked = true;

      if(dogWalked){
        resolve("You walked the dog");
      }else{
        reject("You didint walked the dog");
      };

    }, 1500);
  });
};

function cleanKitchen(){

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const kitchenCleaned = true;

      if(kitchenCleaned){
        resolve("You cleaned the kitchen");
      }else{
        reject("You didint cleaned the kitchen");
      };

    }, 2500);
  });
};

function takeOutTrash(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const trashTakenOut = true;

      if(trashTakenOut){
        resolve("You take out the trash");
      }else{
        reject("You didint take out trash");
      }
    }, 500);
  });
};

async function doChores(){

  try{
    const walkDogResoult = await walkDog();
    console.log(walkDogResoult);
  
    const cleanKitchenResoult = await cleanKitchen();
    console.log(cleanKitchenResoult);
  
    const takeOutTrashResoult = await takeOutTrash();
    console.log(takeOutTrashResoult);
  
    console.log("You finished all the chores!")
  }
  catch(error){
    console.error(error);
  }
}

doChores();

///////////////////////////////////////////// JSON |||||||||||||||||||||||||||||||||||||

const jsonNames =  `["Spongebob", "Patric", "Squidward", "Sandy"]`;
const jsonPerson = `{"name":"Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]}`
const jsonPeople = `[{"name":"Spongebob","age": 30,"isEmployed": true},
                    {"name":"Patric","age": 24,"isEmployed": false},
                    {"name":"Squidward","age": 50,"isEmployed": true},
                    {"name":"Sandy","age": 37,"isEmployed": false}]`


// const jsonString = JSON.stringify(names)
const parsedData = JSON.parse(jsonNames)

// stringify გადაყავს json სთრინგისთვის
// parse გადაყავს ჯავასკრიპტის ენაზე


fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value.age)))
  .catch(error => console.error(error));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    if(response.ok){
      throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetchData();

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block"
  } catch (error) {
    console.error(error);
  }
}


const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(square)

function square(element){
  return Math.pow(element, 2)
}

const students = ["Student1", "Student2", "Student3", "Student4", "Student5"]

const lowerStudents =  students.map(lowerCase)

function lowerCase(element){
  return element.toLowerCase();
}

const ages = [15, 16, 17, 18, 23, 11, 41]
const adults = ages.filter(isAdult)

function isAdult(element){
  return element >= 18
}

const prices = [5, 1, 53, 46, 3456, 5]
const total = prices.reduce(sum)

function sum(accumulator, currentValue){
  return accumulator + currentValue
}

const words = ['asd', 'dsa', 'wsp', 'psw', 'sap']

const upperWods = words.forEach(upper)

function upper(element){
  console.log(element.toUpperCase())
}

let fruits = ["asd", "dsa", "wsp", "psw"]
let name = "Andria"

let foods = [...name]

console.log(foods)

const food1 = "Pizza"
const food2 = "Hamburger"
const food3 = "Hotdog"
const food4 = "Sushi"
const food5 = "Ramen"

function openFridge(...foods){
  console.log(foods)
}

openFridge(food1, food2, food3, food4, food5)
*/