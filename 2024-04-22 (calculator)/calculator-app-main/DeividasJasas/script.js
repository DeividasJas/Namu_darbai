// CHOOSE ALL CALCULATOR INPUTS
let results = document.getElementById("results");

// 7, 8, 9, Del, 4, 5, 6, +, 1, 2, 3, -, ., 0, /, x, Reset, =

const btn_7 = document.getElementById("btn_7");
const btn_8 = document.getElementById("btn_8");
const btn_9 = document.getElementById("btn_9");
const btn_del = document.getElementById("btn_del");
const btn_4 = document.getElementById("btn_4");
const btn_5 = document.getElementById("btn_5");
const btn_6 = document.getElementById("btn_6");
const btn_plus = document.getElementById("btn_plus");
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");
const btn_minus = document.getElementById("btn_minus");
const btn_dot = document.getElementById("btn_dot");
const btn_0 = document.getElementById("btn_0");
const btn_divide = document.getElementById("btn_divide");
const btn_multiply = document.getElementById("btn_multiply");
const btn_reset = document.getElementById("btn_reset");
const btn_equals = document.getElementById("btn_equals");

// REGEX VALUES -----------------------------------
const numbersRegex = /[0-9.]/;

// -----------------------------------------------------------
class calculator{
    constructor(display){
        this.display = display
    }
    // console.log(`Calculator value is: ${this.display}`)

    clearDisplay(){
        this.display = ""
    }

    update(answr){
        return this.display.innerText = answr

    }

    addition(num){
        // this.display += num
        // this.display.innerText + num.toString()

        // console.log(parseFloat(this.display.innerText) + num, "after addition")
        // return this.display..innerText = (parseFloat(this.display.innerText) + num).toString()

        const answer = parseFloat(this.display.innerText) + num
        console.log(answer);
        this.update(answer)


    }

    subtraction(num){
        this.display -= num
        console.log(this.display.innerText, "after subtraction")
    }

    multilpy(num){
        this.display *= num
    }
}

const displayFromDom = document.getElementById("display")
// console.log(displayFromDom.innerText)

const brandNewCalculator = new calculator(displayFromDom)


brandNewCalculator.addition(1)
brandNewCalculator.addition(13)
brandNewCalculator.addition(15)
// brandNewCalculator.addition(20)


// console.log(brandNewCalculator.display.innerText)
