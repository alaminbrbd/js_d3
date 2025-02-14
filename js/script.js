// show text
function showText(){
    document.getElementById('st').innerHTML="Nusaiba";
}

// show date
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}

// change text 
function changeText(){
    document.getElementById('ct').innerHTML="Hello world";
}

// change the color of the text 
function changeColor(){
    document.getElementById('cc').style.color="red";
}
function bulbOn(){
    document.getElementById('img').src="image/on.gif";
}

function bulbOff(){
    document.getElementById('img').src="image/off.gif";
}
// DOM Events

const div= document.getElementById("myDiv");
div.addEventListener("contextmenu", (e)=>{e.preventDefault()});

// show your name when clicking a button
function showName(){
    document.getElementById("output").innerHTML="mdAlamin";
}
// show a random number between 1 and 100
function showRandomNumber(){
    document.getElementById("output").innerText=Math.floor(Math.random()*100)+1;
}
// change the background color of the page
function changeBgColor(){
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
}
// Show the sum of two numbers
function sumNumbers() {
    let a = 5, b = 10;
    document.getElementById("output").innerText = `Sum: ${a + b}`;
}

// multiply two numbers
function multiplyNumbers(){
    let a=4, b=3;
    document.getElementById("output").innerText=`Product:${a*b}`;
}
// swap two numbers
function swapNumbers(){
    let a=5, b=10;
    [a, b]=[b,a];
    document.getElementById("output").innerText=`Swapped:a=${a}, b=${b}`;
}
// show a short quote
function showQuote(){
    let quotes=["Belive in yourself!", "Never give up!", "practice more learn more!","Stay positive!"];
    document.getElementById("output").innerText=quotes[Math.floor(Math.random()*quotes.length)];
}
// reverse the text of a paragraph when clicking a button
function reverseText() {
    let para = document.getElementById("reversePara");
    para.innerText = para.innerText.split("").reverse().join("");
}

// change the font size of a paragraph when clicking a button
function changeFontSize() {
    let para = document.getElementById("fontPara");
    para.style.fontSize = (para.style.fontSize === "20px") ? "14px" : "20px";
}

// make the text bold when clicking a button
function makeBold() {
    let para = document.getElementById("boldPara");
    para.style.fontWeight = (para.style.fontWeight === "bold") ? "normal" : "bold";
}
// var
var number1=5;
var number2=2;
var result= number1 + number2;

// display the result
function showData(){
    document.getElementById("showData").innerText=result;
}
// let
let num1=65;
let num2=45;
let results= num1*num2;

// display the result
function showMult(){
    document.getElementById("showMult").innerText=results;
}
// let
let digts1=1950;
let digts2=3550;
let outputs= digts1/digts2;
function showDiv(){
    document.getElementById("showDiv").innerText=outputs;
}
// let
let dta1=1950;
let dta2=3550;
let outputii= digts1-digts2;
// display the result
function showPer(){
    document.getElementById("showPer").innerText=outputii;
}

// const

const num3=123;
const num4=456;
const outputiii= num3+num4;

// display the result
function showAdd(){
document.getElementById("showAdd").innerText=outputiii;}
// 
// let
let txt1=1950;
let txt2=3550;
let outputiv= txt1>txt2;
// display the result
function showOpd(){
    document.getElementById("showOpd").innerText=outputiv;
}
// let
let txt3=1950;
let txt4=3550;
let outputv= txt4>txt3;
// display the result
function showOpdii(){
    document.getElementById("showOpdii").innerText=outputv;
}
// let
let txt5='Never'
let txt6='giveup..'
let outputvi= txt5+" "+txt6;
// display the result
function showOpdiii(){
    document.getElementById("showOpdiii").innerText=outputvi;
}
// let
let x=100;
let y=200;
let z= x % y;
// display the result
function pErc(){
    document.getElementById("pErc").innerHTML=z;
}
// let
let text="hello"
text+="World!";

// display the result
function pErcad(){
    document.getElementById("pErcad").innerHTML=text;
}
// let
let m = 10;
m**=5;

// display the result
function pErexpo(){
    document.getElementById("pErexpo").innerHTML="Value of m is: " + m;
}

// 
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow"); // Add "Yellow" at the end
colors.shift(); // Remove the first element ("Red")

function showColors() {
    document.getElementById("arrayOutput").innerText = colors.join(", ");
}
// 
let myString = "Hello JavaScript!";
let upperString = myString.toUpperCase(); // Convert to uppercase
let stringLength = myString.length; // Get length

function showStringInfo() {
    document.getElementById("stringOutput").innerText = `Uppercase: ${upperString} | Length: ${stringLength}`;
}
// 
const myConstant = "I cannot be changed!";
let myVariable = "I can be updated.";

function updateVariable() {
    myVariable = "Now I have a new value!";
    document.getElementById("constLetOutput").innerText = `Constant: ${myConstant} | Variable: ${myVariable}`;
}
// 
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function showFruits() {
    let output = "";
    for (let i = 0; i < fruits.length; i++) {
        output += `<li>${fruits[i]}</li>`;
    }
    document.getElementById("loopOutput").innerHTML = output;
}
// 
let numbers = [2, 4, 6, 8, 10];

function doubleNumbers() {
    let doubled = [];
    numbers.forEach(num => doubled.push(num * 2));
    document.getElementById("forEachOutput").innerText = doubled.join(", ");
}
// 
const students=["Rofik", "Karen", "Fahad"];
function showArray(){
    document.getElementById("sdata5").innerHTML=students[1];
}
// 
const color = ["red", "Orange", "rose", "yellow"];

document.getElementById("btno").addEventListener("click", function() {
    let selectedColor = colors.at(0); // Fetches the third element ("rose")
    document.getElementById("resultf").textContent = "Selected color: " + selectedColor;
});
// 
const cars = ["BMW", "Volvo", "Saab", "Ford"];

document.getElementById("btnShowCars").addEventListener("click", function() {
    let i = 2;
    let len = cars.length;
    let text = "";

    for (; i < len; i++) {
        text += cars[i] + "<br>";
    }

    document.getElementById("carList").innerHTML = text;
});

const carss = ["BMW", "Volvo", "Saab", "Ford"];

document.getElementById("btnReverseCars").addEventListener("click", function() {
    let text = "";

    for (let i = cars.length - 1; i >= 0; i--) {
        text += cars[i] + "<br>";
    }

    document.getElementById("reverseCarList").innerHTML = text;
});

const countries = ["USA", "Canada", "Germany", "Japan", "Australia", "France", "Brazil", "India", "UK", "Italy"];

document.getElementById("btnRandomCountry").addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * countries.length);
    let selectedCountry = countries[randomIndex];

    document.getElementById("randomCountry").innerHTML = "Selected Country: " + selectedCountry;
});
// 
const time = new Date().getHours();
let greeting;

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.getElementById("greetingText").innerHTML = greeting;
// 
document.getElementById("generateBtn").addEventListener("click", function() {
    let text;
    if (Math.random() < 0.5) {
        text = "<a href='https://google.com' target='_blank'>Visit Google</a>";
    } else {
        text = "<a href='https://wikipedia.org' target='_blank'>Visit Wikipedia</a>";
    }
    document.getElementById("randomLink").innerHTML = text;
});
// 
document.getElementById("animalBtn").addEventListener("click", function() {
    let animal;
    let randomNum = Math.floor(Math.random() * 5); // Generates a random number between 0-4

    switch (randomNum) {
        case 0:
            animal = "Lion";
            break;
        case 1:
            animal = "Elephant";
            break;
        case 2:
            animal = "Tiger";
            break;
        case 3:
            animal = "Giraffe";
            break;
        case 4:
            animal = "Panda";
            break;
        default:
            animal = "Unknown Animal";
    }

    document.getElementById("randomAnimal").innerHTML = "You got: " + animal;
});
// 
let monthText;
let currentMonth = new Date().getMonth(); // 0 = January, 1 = February, ..., 11 = December

switch (currentMonth) {
    case 0:
        monthText = "It's January - A fresh start!";
        break;
    case 1:
        monthText = "It's February - The shortest month!";
        break;
    case 5:
        monthText = "It's June - Summer vibes!";
        break;
    case 9:
        monthText = "It's October - Spooky season!";
        break;
    case 11:
        monthText = "It's December - Time for celebrations!";
        break;
    default:
        monthText = "It's another great month!";
}

document.getElementById("monthDisplay").innerHTML = monthText;
// 
const flowers = ["Rose", "Lily", "Tulip", "Orchid", "Sunflower"];

let i = 0;
let textn = "";

while (flowers[i]) {
  text += flowers[i] + "<br>";
  i++;
}

document.getElementById("flowerList").innerHTML = text;
// 
document.getElementById("booleanResult").innerHTML =
"An empty array [] is " + Boolean([]) + "<br>" +
"An empty object {} is " + Boolean({}) + "<br>" +
"null is " + Boolean(null) + "<br>" +
"undefined is " + Boolean(undefined) + "<br>" +
"A non-empty array [1, 2, 3] is " + Boolean([1, 2, 3]) + "<br>" +
"A defined variable with no value (let x;) is " + Boolean(x);
// 
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
  }
  
  let temperature = toCelsius(77);
  document.getElementById("demo1").innerHTML = temperature + "°C";
// 
function toMiles(kilometers) {
    return kilometers * 0.621371;
  }
  
  let distance = toMiles(10);
  document.getElementById("demo2").innerHTML = distance + " miles";
//   
// Create an array of cities
const cities = ["Dhaka", "New York", "London"];

// Change an element:
cities[0] = "Tokyo";

// Add a new city:
cities.push("Paris");

// Display the updated list:
document.getElementById("demo9").innerHTML = cities.join(", ");
// 
try {
    const person = {name: "John", age: 30, country: "USA"};
  
    // Attempting to reassign the object (will throw an error)
    person = {name: "Alice", age: 25, country: "Canada"};
  }
  catch (err) {
    document.getElementById("errorMsg").innerHTML = err;
  }
//   
try {
    const gadget = {brand: "Apple", model: "iPhone 15", color: "Black"};
  
    // Attempting to reassign the object (will throw an error)
    gadget = {brand: "Samsung", model: "Galaxy S24", color: "Blue"};
  }
  catch (err) {
    document.getElementById("errorDisplay").innerHTML = err; // Updated ID name
  }
  