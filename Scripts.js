let Cont = 0;

let Num_1 = 0;
let Num_2 = 0;

let Turn = 0;

let Operation = 0;

let Result = 0;

// Cont => Counter for First or Second, Third... Digits.
//
// Num_1 => First Numbers Sequence for a Operation.
// Num_2 => Second Numbers Sequence for a Operation.
//
// Turn => What Sequence to Add the Numbers.
//
// Operation:
//   0 => None.
//   1 => Plus.
//   2 => Minus.
//   3 => Multiplication.
//   4 => Division.
//
// Result => Result of the Operations.

const Digit_0 = document.getElementById("Zero_Button");
const Digit_1 = document.getElementById("One_Button");
const Digit_2 = document.getElementById("Two_Button");
const Digit_3 = document.getElementById("Three_Button");
const Digit_4 = document.getElementById("Four_Button");
const Digit_5 = document.getElementById("Five_Button");
const Digit_6 = document.getElementById("Six_Button");
const Digit_7 = document.getElementById("Seven_Button");
const Digit_8 = document.getElementById("Eight_Button");
const Digit_9 = document.getElementById("Nine_Button");

const Plus = document.getElementById("Plus_Button");
const Minus = document.getElementById("Minus_Button");
const Multiplication = document.getElementById("Multiplication_Button");
const Division = document.getElementById("Division_Button");

const Comma = document.getElementById("Comma_Button");

const Equal = document.getElementById("Equal_Button");

const Clear = document.getElementById("Clear_Button");

const Numbers = document.getElementById("Numbers");

Digit_0.addEventListener('click', () => {
    if (Cont == 0){                                 // If it's the first number you're typing,
        Num_1 = Num_1 * 0;                          // multiply the first number by zero and show the result.
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {                                        // If it's not the first number you're typing,
        Num_1 = Num_1 * 10;                         // multiply the first number by ten, sum the number you've typed
        Cont += 1;                                  // and show the result.
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_1.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){                    // If it's not the first number you're typing and it's the 
        Num_1 = (Num_1*10)+1;                       // first number sequence you're typing, multiply the first number by ten, 
        Cont += 1;                                  // sum the number you've typed and show the result.
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){             // If it's not the first number you're typing and it's the
        Num_2 = (Num_2*10)+1;                       // second number sequence you're typing, multiply the first number by ten,
        Cont += 1;                                  // sum the number you've typed and show the result.
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){                    // If it's the first number you're typing and it's the
        Num_1 += 1;                                 // first number sequence you're typing, sum the number you've typed
        Cont += 1;                                  // and show the result.
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){             // If it's the first number you're typing and it's the
        Num_1 = (Num_1*10)+1;                       // second number sequence you're typing, sum the number you've typed
        Cont += 1;                                  // and show the result.
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});                                                 // Same logic for the rest of the numbers!

Digit_2.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){
        Num_1 = (Num_1*10)+2;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){
        Num_2 = (Num_2*10)+2;
        Cont += 1;
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){
        Num_1 += 2;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){
        Num_1 = (Num_1*10)+2;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_3.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){
        Num_1 = (Num_1*10)+3;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){
        Num_2 = (Num_2*10)+3;
        Cont += 1;
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){
        Num_1 += 3;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){
        Num_1 = (Num_1*10)+3;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_4.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){
        Num_1 = (Num_1*10)+4;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){
        Num_2 = (Num_2*10)+4;
        Cont += 1;
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){
        Num_1 += 4;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){
        Num_1 = (Num_1*10)+4;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_5.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){
        Num_1 = (Num_1*10)+5;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){
        Num_2 = (Num_2*10)+5;
        Cont += 1;
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){
        Num_1 += 5;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){
        Num_1 = (Num_1*10)+5;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_6.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){
        Num_1 = (Num_1*10)+6;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){
        Num_2 = (Num_2*10)+6;
        Cont += 1;
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){
        Num_1 += 6;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){
        Num_1 = (Num_1*10)+6;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_7.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){
        Num_1 = (Num_1*10)+7;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){
        Num_2 = (Num_2*10)+7;
        Cont += 1;
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){
        Num_1 += 7;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){
        Num_1 = (Num_1*10)+7;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_8.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){
        Num_1 = (Num_1*10)+8;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){
        Num_2 = (Num_2*10)+8;
        Cont += 1;
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){
        Num_1 += 8;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){
        Num_1 = (Num_1*10)+8;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_9.addEventListener('click', () => {
    if (Cont != 0 && Turn == 0){
        Num_1 = (Num_1*10)+9;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont != 0 && Turn == 1){
        Num_2 = (Num_2*10)+9;
        Cont += 1;
        console.log(Num_2);
        Numbers.innerHTML = Num_2;
    };
    if (Cont == 0 && Turn == 0){
        Num_1 += 9;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else if (Cont == 0 && Turn == 1){
        Num_1 = (Num_1*10)+9;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Comma.addEventListener('click', () => {             // DOCUMENTAR ISSO AQUI EM!!!!!
    // Fazer magica aqui!!
});

Plus.addEventListener('click', () => {
    Numbers.innerHTML = 0;
    if (Turn == 0){                                 // If it's the first number sequence you're typing, set the sequence to 'second'
        Turn = 1;                                   // and set the operation to plus.
        Operation = 1;
    } else {                                        // If it's the second number sequence you're typing, set the sequence to 'first'
        Turn = 0;                                   // and set the operation to none.
        Operation = 0;
    };
});                                                 // Same logic for the rest of the operations!

Minus.addEventListener('click', () => {
    Numbers.innerHTML = 0;
    if (Turn == 0){
        Turn = 1;
        Operation = 2;
    } else {
        Turn = 0;
        Operation = 0;
    };
});

Multiplication.addEventListener('click', () => {
    Numbers.innerHTML = 0;
    if (Turn == 0){
        Turn = 1;
        Operation = 3;
    } else {
        Turn = 0;
        Operation = 0;
    };
});

Division.addEventListener('click', () => {
    Numbers.innerHTML = 0;
    if (Turn == 0){
        Turn = 1;
        Operation = 4;
    } else {
        Turn = 0;
        Operation = 0;
    };
});

Equal.addEventListener('click', () => {
    if (Operation == 1){                            // If the operation is set to plus, set the result as the sum of the two numbers,
        Result = Num_1 + Num_2;                     // show it and reset all the variables.
        console.log(Result);
        Numbers.innerHTML = Result;
        Num_1 = 0;
        Num_2 = 0;
        Turn = 0;
        Cont = 0;
        Operation = 0;
    };                                              // Same logic for the rest of the equal operations!
    if (Operation == 2){
        Result = Num_1 - Num_2;
        console.log(Result);
        Numbers.innerHTML = Result;
        Num_1 = 0;
        Num_2 = 0;
        Turn = 0;
        Cont = 0;
        Operation = 0;
    };
    if (Operation == 3){
        Result = Num_1 * Num_2;
        console.log(Result);
        Numbers.innerHTML = Result;
        Num_1 = 0;
        Num_2 = 0;
        Turn = 0;
        Cont = 0;
        Operation = 0;
    };
    if (Operation == 4){
        Result = Num_1 / Num_2;
        console.log(Result);
        Numbers.innerHTML = Result;
        Num_1 = 0;
        Num_2 = 0;
        Turn = 0;
        Cont = 0;
        Operation = 0;
    };
});

Clear.addEventListener('click', () => {             // Reset the numbers variables and show the result as 0.
    Num_1 = 0;
    Num_2 = 0;
    console.log(Num_1);
    Numbers.innerHTML = Num_1;
});

//tirar console log dps de td !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!