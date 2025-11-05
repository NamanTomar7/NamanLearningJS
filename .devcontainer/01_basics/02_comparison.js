// console.log("2">1)
// console.log(2>+1)
// console.log("02">1)
// console.log(2==1)

// // ******************************** Data Types  *******************************

// Primitve - number, String, Boolean, BigInt, Symbol, null, undefined

// const num = 230;
// const anotherNum = 33.67;
// const name = "Naman";
// let isLoggedIn = true;
// let emailID;
// let Destination = undefined;
// const bigNumber = 341334345454361323445n;

// console.log(typeof(num));
// console.log(typeof(anotherNum));
// console.log(typeof(name));
// console.log(typeof(isLoggedIn));
// console.log(typeof(emailID));
// console.log(typeof(bigNumber));


// Non primitve(Reference Types)- Array, objects, Functions

// const users = ["Ram", "Mohit", "Shyam"];

// const myFunction = function(){   // Functions as variables
//     console.log("This is my function");
// }

// let user1 = {
//     name:"ram",
//     age:20,
//     workplace:"rajendra Nagar",
//     salary:34300.42,
//     newcall: myFunction()
// }
// console.log(user1.newcall);

// // **************************** Stack and Heap Memories *************************

// // Stack memory - primitve data types are stored 
// // Variable - a copy of variable is given instead of the reference, changes doesn't affect the original variable value

// // Heap Memory - Non primitive data types are stored
// // Variable - Reference of the variable is passed, changes made into another referenced variable affects the orignal value

// let Myname2 = "Naman";
// let MyFullName = Myname2 + " Tomar";

// console.log(Myname2);
// console.log(MyFullName);

// let user2 = {
//     name:"Ghansham",
//     email: "namanto5667@gmail.com",
//     age:22,
//     kamayi: 30000
// }

// let anotherUser = user2;
// anotherUser.email = "namanTomar776@gmail.com";
// //  Changes will be made in user2 too, since reference is taken from it
// console.log(anotherUser.email);
// console.log(user2.email);

// // **************************** String ****************************

// // There is another method to create a string

// const Fullname =new String('Naman Tomar ');
// let age = 20;
// const greetings = "Namaste!";

// console.log(`${greetings}, My name is ${Fullname.toUpperCase()}. I am ${age} years old`);
// const firstName = Fullname.substring(0,5);
// console.log(firstName);

// const anotherString = Fullname.slice(-6, -1);
// console.log(anotherString);

// const newString = "     Naman    Tomar   ";
// console.log(newString.trim(newString)); //  Only removes starting and ending space

// const url = 'https://NamanTomar776/naman%20Tomar';
// console.log(url.replace('%20', '-'));
// console.log(url.includes('Tomar'));

// const marks = "33-45-67-23-67";
// let allSubjectMarks = (marks.split('-'));
// console.log(allSubjectMarks);