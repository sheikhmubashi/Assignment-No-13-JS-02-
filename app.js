//-------------Changing case------------//


//.......... Question 1..........//


// var userInput = prompt("Enter Any Dry Fruits Name");
// document.write("User Input: " + userInput);
// var upper = userInput.toUpperCase();
// document.write("<br>Upper Case: " + upper);


//.......... Question 3..........//

// var userInput = prompt("Enter Your Favorite Programming Language");
// document.write("User Input: " + userInput)
// var firstLetter = userInput.slice(0, 1);
// var otherLetters = userInput.slice(1);
// var ProgrammingLanguage = firstLetter.toUpperCase() + otherLetters
// document.write("<br>Title Case: " + ProgrammingLanguage);


//-------------Strings: measuring length and extracting parts----------------//

//.......... Question 1..........//


// var mobileModel = prompt("Enter Your Favorite Mobile Phone Model");
// document.write("My favorite phone is: " + mobileModel + "<br>");
// var mobileLength = mobileModel.length
// document.write("Length of String: " + mobileLength);

//.......... Question 2..........//

// var userInput = prompt("Enter any country name");
// let firstCapital = userInput.slice(0, 1);
// let otherLetters = userInput.slice(1);
// let join = firstCapital.toUpperCase() + otherLetters;
// document.write("User Input: " + join);
// let lastCharcter = userInput.charAt(userInput.length - 1);
// document.write("<br>Last Charcter of input: " + lastCharcter);


//---------Strings: finding segments-------------//

//.......... Question 1..........//


// var name = 'Pakistani';
// document.write("String: " + name + "<br>Index of 'n': " + name.indexOf('n'));

//.......... Question 2..........//


// var userInput = prompt("Enter User Name");
// var atTheRate = '@';
// var fullStop = '.';
// var comma = ',';
// var exclaminationMark = '!';
// for (var i = 0; i < userInput.length; i++) {
//     var check = userInput.charAt(i)
//     if (check == atTheRate || check == fullStop || check == comma || check == exclaminationMark) {
//         alert("Enter a valid User Name");

//     }

// }

//.......... Question 3..........//


// let string = 'The quick brown fox jumps over the lazy dog';
// document.write("Text: " + string);
// let lowerString = string.toLowerCase();
// let countVariable = (lowerString.match(/the/g)).length;
// document.write('<br>There are ' + countVariable + " occurrences of word 'the' ");

//----------Strings: finding a character at a location------------//

//.......... Question 1..........//


// var name = 'Pakistani';
// document.write("String: " + name + "<br>Character at Index 3: " + name.charAt(3));


//----------------Strings: replacing characters------------//

//.......... Question 1..........//

// var city = 'Hyderabad';
// document.write("City: " + city);
// var cityHyder = city.slice(0, 5);
// var cityIslam = cityHyder.replace(cityHyder, 'Islam');
// var abad = city.slice(5);
// var cityReplace = cityIslam + abad
// document.write("<br>After Replacement: " + cityReplace);

//.......... Question 2..........//

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var replaceMessage = message.replace(/and/g, '&');
// document.write(replaceMessage)


//--------------Rounding numbers------------//

//.......... Question 1..........//


// let number = +(prompt("Enter any postive integer"));
// document.write("number: " + number + "<br>");
// let round = Math.round(number);
// document.write("round off value of: " + round + "<br>");
// let floor = Math.floor(number);
// document.write("floor value of: " + floor + "<br>");
// let ceil = Math.ceil(number);
// document.write("ceil value of: " + ceil);

//------------Generating random numbers--------------//

//.......... Question 1..........//


// let dice = (Math.random()) * 7
// let value = Math.floor(dice)
// document.write('random dice value: ' + value);

//.......... Question 2..........//


// let tail = 1;
// let head = 2;
// let numberGenerate = (Math.random()) * 3;
// let coinToss = Math.floor(numberGenerate);
// if (coinToss == 1) {
//     document.write(tail + "<br>random coin value: Tail");
// } else if (coinToss == 2) {
//     document.write(head + "<br>random coin value: Head");
// } else {
//     document.write("Coin has vanished in System ☺");
// }


//.......... Question 3..........//


// var secret = Math.random() * 10;
// var secrets = Math.floor(secret);
// var inn = +(prompt("enter number between 1 to 10"));
// if (inn == secrets){
//     document.write("congrats");
// }else{
//     document.write("try again");
// }


//--------------Converting strings to integers and decimals-------------//

//.......... Question 1..........//


// let weight = prompt("Enter your weight in kilograms");
// document.write("The weight of user is: " + weight);


//---------Converting strings to numbers, numbers to strings------------//

//.......... Question 1..........//

// var number = 472;
// var convertNumber = number.toString();
// var a = typeof(convertNumber);
// document.write("Value: " + number + "<br>Type: " + a);
// var string = "472";
// var convertString = parseInt(string);
// var b = typeof(convertString);
// document.write("<br>Value: " + string + "<br>Type: " + b);


//.......... Question 2..........//


// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var string = num.toString();
// var stringStart = string.slice(0, 2);
// var stringEnd = string.slice(3);
// var strings = stringStart + stringEnd;
// document.write("Result: " + strings);

