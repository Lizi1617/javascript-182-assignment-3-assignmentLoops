// write your code in this directory
//1
let mayVar = 0;

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2
let myvAr = 0;

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//3
let sum = 0; // ვიწყებთ sum-ს 0-ით და მოგვიანებით მას ემატება რიცხვები.

for (let i = 1; i <= 50; i++) { // ვიმეორებთ ციკლს 1-დან 50-მდე.
    sum += i; // მიმდინარე რიცხვი (`i`) ემატება sum-ს.
}

console.log(sum); // კონსოლში გამოჩნდება 1-დან 50-მდე რიცხვების ჯამი.


//4
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
//i-ს მნიშვნელობების:

// // ნაბიჯი 1: i = 0
// // ნაბიჯი 2: i = 2
// // ნაბიჯი 3: i = 4
// // ნაბიჯი 4: i = 6
// // ნაბიჯი 5: i = 8
// // ამის შემდეგ, როცა i = 10, პირობა (i < 10) აღარ სრულდება და ციკლი მთავრდება.

// ციკლი სრულდება 5-ჯერ და იბეჭდება შემდეგი რიცხვები: 0, 2, 4, 6, 8.

//5
// break statement გამოიყენება მაშინ, როდესაც გვინდა, რომ ციკლი ადრეულ ეტაპზე დასრულდეს. განსაკუთრებით გამოყენებადია, ისეთ სიტუაციებში, როდესაც ზუსტად არ ვიცით რამდენი გამეორება გვჭირდება, და გვსურს რომ ციკლი გარკვეულ ეტაპზე შეჩერდეს. 

// For example
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break; 
//     }
//     console.log(i);
// }

//6
// continue statement გამოიყენება ციკლის მიმდინარე გამეორების გაოსატოვებლად და შემდეგზე გადასასვლელად, თუმცა ის არ აჩერებს ციკლის მსვლელობას, ისევე როგორც break statement-ი 

// For example:
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;  // გამოტოვებს მიმდინარე მნიშვნელობას, როცა სამთან მივა დაწერს პირდაპირ ოთხს და ციკლში 3 არ გამოჩნდება
//     }
//     console.log(i);
// }

//7
let randomNumber;

for (; ;) { 
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    if (randomNumber === 27) {
        break;
    }
}

//8
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//9
for (let i = 1; i <= 100; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}

//10
// let sum = 0;  
// for (let i = 2; i <= 1000; i += 2) {  
//     sum += i; 
// }

// console.log(sum);  

//11
// let sum = 0;  

// for (let i = 1; i <= 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {  
//         sum += i;  
//     }
// }

// console.log(sum);  

//12
// let sum = 0;  

// for (let i = 1; i <= 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {  
//         sum += i;  
//     }
// }

// console.log(sum);  

//13
// function generateRandomPassword(length) {
//     let password = '';
//     for (let i = 0; i < length; i++) {
//         const randomCharCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
//         password += String.fromCharCode(randomCharCode);
//     }
//     return password;
// }

// console.log(generateRandomPassword(12));

//14
let str = "";
for (let i = 0; i < 10; i++) {
    str += Math.random() > 0.5 ? " " : "?";
}
console.log("Generated string:", str);


for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
        console.log("Position of '?':", i);
        break;  
    }
}

//15
function generateRoom() {
    
    let room = [];
    let mysteryBoxPlaced = false;

    
    for (let i = 0; i < 10; i++) {
        room[i] = []; 

        for (let j = 0; j < 10; j++) {
            if (i === 0 || i === 9 || j === 0 || j === 9) {
                room[i][j] = '#';
            } else {
                let rand = Math.random();
                if (!mysteryBoxPlaced && rand < 0.1) {
                    room[i][j] = '?';
                    mysteryBoxPlaced = true;
                } else if (rand < 0.3) {
                    room[i][j] = '#';
                } else {
                    room[i][j] = ' ';
                }
            }
        }
    }

    for (let i = 0; i < 10; i++) {
        console.log(room[i].join(''));
    }
}

generateRoom();

























