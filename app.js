// function yazdirMerhaba() {
//   console.log("Merhaba 2024");
// }

// yazdirMerhaba();
// yazdirMerhaba();
// yazdirMerhaba();

// function yazdirParametre(message, name = new Date().getFullYear()) {
//   console.log(message, name);
// }

// yazdirParametre("Hello", "2024");
// yazdirParametre("Salut", "2025");
// yazdirParametre("Hola", "2026");
// yazdirParametre(12.4, true);

// yazdirParametre("Hallo");
// yazdirParametre("Ehlen");
// yazdirParametre();

// console.log(new Date());

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name} is ${age} years old`);
//   return age;
// }

// console.log(calculate("Ahmet", 1990));

// const ismetAge = calculate("Ismet", 1890);
// console.log("Ismet's Age:", ismetAge);

// function add(num1, num2) {
//   const sum = num1 + num2;
// }

// function addShort(num1, num2) {
//   return (num1 + num2) / (num1 * num2);
// }

// const result1 = add(3, 5);
// const result2 = add(5, 9);
// const result3 = addShort(5, 9);
// console.log(result1, result2);
// console.log(result3);

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "EVEN";
//   } else {
//     return "ODD";
//   }
// }

// function isEvenOrOdd(num) {
//   let result;
//   if (num % 2 === 0) {
//     result = "EVEN";
//   } else {
//     result = "ODD";
//   }
//   return result;
// }

// function isEvenOrOdd(num) {
//   return num % 2 === 0 ? "EVEN" : "ODD";
// }

// const num = prompt("Please enter a number:");
// console.log(`${num} is ${isEvenOrOdd(num)}`);

// const yazdir = function (message) {
//   console.log(message);
// };

// yazdir("Hello FS14");

// let oddEven = function (number) {
//   return number % 2 === 0 ? "EVEN" : "ODD";
// };

// console.log(oddEven(5));
// console.log(oddEven(2));

// const kareAl = (num) => num * num;
// const topla = (s1, s2) => s1 + s2;
// const ciktiVer = () => console.log("Merhaba");

// console.log("KARE:", kareAl(4));
// console.log("TOPLA:", topla(4, 5));
// ciktiVer();

// const findBiggest = (n1, n2, n3) => {
//   let biggest = n1;
//   if (n2 >= biggest) {
//     biggest = n2;
//   }
//   if (n3 >= biggest) {
//     biggest = n3;
//   }
//   return biggest;
// };

// console.log("BIGGEST:", findBiggest(1, 3, 2));

// const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3);
// console.log("BIGGEST:", findBiggest(1, 3, 2));

// const calculateAge = (year) => new Date().getFullYear() - year;

// console.log(`AGE:${calculateAge(1990)}`);

// const h = Number(prompt("h:"));
// const r = Number(prompt("r:"));

// const volume = (r, h) => Math.PI * r * r * h;
// console.log("VOLUME:", volume(r, h).toFixed(2));
// console.log("VOLUME:", volume(r, h).toPrecision(4));
// console.log("VOLUME:", volume(r, h).toExponential(5));

const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mul = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;

const compute = (n1, n2, operator) => {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "x":
    case "*":
      result = mul(n1, n2);
      break;
    case "/":
      result = div(n1, n2);
      break;
    default:
      alert("Incorrect Operator");
      result=""
      break;
  }
  return result;
};

const n1 = +prompt("First Number:");
const operator = prompt("Operator");
const n2 = +prompt("Second Number:");

console.log(`${n1}${operator}${n2} = ${compute(n1, n2, operator)}`);
