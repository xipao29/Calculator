let Cont = 0;
let Num_1 = 0;
let Num_2 = 0;
let Turn = 0;
let Operation = 0;
let Result = 0;

// Cont => Counter for First or Second, Third... Digits
//
// Num_1 => First Numbers Sequence for a Operation
// Num_2 => Second Numbers Sequence for a Operation
//
// Turn => What Sequence to Add the Numbers
//
// Operation:
//   0 => Neutral
//   1 => Plus
//   2 => Minus
//   3 => Multiply
//   4 => Division
//
// Result => Result of the Operations

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

const Equal = document.getElementById("Equal_Button");

const Clear = document.getElementById("Clear_Button");

const Numbers = document.getElementById("Numbers");

Digit_0.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 = Num_1 * 0;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
        Num_1 = Num_1 * 10;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_1.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 += 1;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
        Num_1 = (Num_1*10)+1;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_2.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 += 2;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
        Num_1 = (Num_1*10)+2;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_3.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 += 3;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
        Num_1 = (Num_1*10)+3;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_4.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 += 4;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
        Num_1 = (Num_1*10)+4;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_5.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 += 5;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
        Num_1 = (Num_1*10)+5;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_6.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 += 6;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
        Num_1 = (Num_1*10)+6;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_7.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 += 7;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
        Num_1 = (Num_1*10)+7;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    };
});

Digit_8.addEventListener('click', () => {
    if (Cont == 0){
        Num_1 += 8;
        Cont += 1;
        console.log(Num_1);
        Numbers.innerHTML = Num_1;
    } else {
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

Plus.addEventListener('click', () => {
    Numbers.innerHTML = 0;
    if (Turn == 0){
        Turn = 1;
        Operation = 1;
    } else {
        Turn = 0;
        Operation = 0;
    };
});

Equal.addEventListener('click', () => {
    if (Operation == 1){
        Result = Num_1 + Num_2;
        console.log(Result);
        Numbers.innerHTML = Result;
        Num_1 = 0;
        Num_2 = 0;
        Turn = 0;
        Cont = 0;
        Operation = 0;
    };
});

Clear.addEventListener('click', () => {
    Num_1 = 0;
    console.log(Num_1);
    Numbers.innerHTML = Num_1;
});

//tirar console log dps de td !!!