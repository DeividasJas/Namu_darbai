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