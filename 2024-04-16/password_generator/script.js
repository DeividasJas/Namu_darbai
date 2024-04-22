// VISI GALIMI PASSWORD CHARAKTERS---------------------------------
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_+=~`[]{}|;:,.<>?/'

// -------------------------------------------------------
// VISI ISTRAUKTI DOM ELEMENTAI-----------------------------------

let generated_password = document.getElementById("generated_code")
let sumbit_button = document.getElementById("button")


let password_length = document.getElementById("range")
let include_upper = document.getElementById("uppercase")
let include_lower = document.getElementById("lowercase")
let include_numbers = document.getElementById("numbers")
let include_symbols = document.getElementById("symbols")

let forma = document.getElementById('forma')
let copy_img = document.getElementById('copy_img')

let uppercase_letters_length = uppercaseLetters.length
let lowercase_letters_length = lowercaseLetters.length
let numbers_length = numbers.length
let symbols_length = symbols.length

// --------------------------------------------------------------------------------------------







// create random number 

const randomNum = () =>{
    return Math.floor(Math.random()*4)
}




let password = "";
// ---CREATE PASSWORDS -------------------
const createPassword = () => {
    let charackterSet = "";
    
    console.log(`Password pries generavima: '${password}'`)
    
    if(include_upper.checked === true){
        charackterSet += uppercaseLetters
    }
    if(include_lower.checked === true){
        charackterSet += lowercaseLetters
    }
    if(include_numbers.checked === true){
        charackterSet += numbers
    }
    if(include_symbols.checked === true){
        charackterSet += symbols
    } 
    if(include_upper.checked === false && include_lower.checked === false && include_numbers.checked === false && include_symbols.checked === false){
        alert('Select minimum one option')
    }
    
    for (let i = 0; i< password_length.value; i++){
        let randomNumeris = Math.floor(Math.random() * charackterSet.length);        
        password += charackterSet.charAt(Math.floor(Math.random() * randomNumeris))
    }
    
    generated_password.innerHTML = password

    console.log(`Naudojami charakteriai: '${charackterSet}'`)
    console.log(`Sugeneruoto password ilgis: '${password_length.value}'`)
    console.log(`Sugeneruotas password: '${password}'`)
}
// ------------------------------------------------------
// CHECK IF PASSWORD ISSTONG ---------------------------------------------
const checkIfStrong = () =>{
    const medium = document.getElementById("two")
    const strong = document.getElementById("three")
    //regex kodai
    const uppercaseRegex = /[A-Z]/g;
    const lowercaseRegex = /[a-z]/g;
    const numbersRegex = /[0-9]/g;
    const symbolsRegex = /[!@#$%^&*()-_+=~`[\]{}|;:,.<>?/]/g;


    const pswd = password;
   
    // console.log((pswd.match(uppercaseRegex) || pswd.match(lowercaseRegex)) && (pswd.match(numbersRegex) || pswd.match(symbolsRegex)) && pswd.length > 5);
    
    // if((pswd.match(uppercaseRegex) && pswd.match(lowercaseRegex)) && pswd.match(numbersRegex) && pswd.match(symbolsRegex) && pswd.length > 7){
    //     console.log('labai stiprus')
    //     strong.style.backgroundColor = "red"
    //     medium.style.backgroundColor = "yellow"
        
    // } else if((pswd.match(uppercaseRegex) || pswd.match(lowercaseRegex)) && (pswd.match(numbersRegex) || pswd.match(symbolsRegex)) && pswd.length > 5){
    //     console.log('vidutinis')
    //     medium.style.backgroundColor = "yellow"
    //     strong.style.backgroundColor = ""
    // } else {
    //     console.log('silpnas')
    //     medium.style.backgroundColor = ""
    //     strong.style.backgroundColor = ""
        
    // }

    console.log((uppercaseRegex.test(pswd) || lowercaseRegex.test(pswd)) && (numbersRegex.test(pswd) || symbolsRegex.test(pswd)) && pswd.length > 5)
    console.log(`tik simboliu ir skaiciu dalis: ${numbersRegex.test(pswd) || symbolsRegex.test(pswd)}`)

    console.log(`skaiciai ${numbersRegex.test(pswd)}`)
    console.log(`tik simboliai ${symbolsRegex.test(pswd)}`);

    if((uppercaseRegex.test(pswd) && lowercaseRegex.test(pswd)) && numbersRegex.test(pswd) && symbolsRegex.test(pswd) && pswd.length > 7){
        console.log('labai stiprus')
        strong.style.backgroundColor = "red"
        medium.style.backgroundColor = "yellow"
        
    } else if((uppercaseRegex.test(pswd) || lowercaseRegex.test(pswd)) && (numbersRegex.test(pswd) || symbolsRegex.test(pswd)) && pswd.length > 5){
        console.log('vidutinis')
        medium.style.backgroundColor = "yellow"
        strong.style.backgroundColor = ""
    } else {
        console.log('silpnas')
        medium.style.backgroundColor = ""
        strong.style.backgroundColor = ""
        
    }
}
    

// --------------------------------

password_length.addEventListener('change', ()=>{
    document.getElementById("range_value").innerHTML = password_length.value
})

sumbit_button.addEventListener('click', (event)=>{
    event.preventDefault()
    password = ""
    createPassword()
    checkIfStrong()
    // console.log("passwrdas yra - ", password)
    copy_img.src = 'images/copy.svg'

})    

copy_img.addEventListener('click', ()=>{
    copy_img.src = 'images/copy_done.svg'
    navigator.clipboard.writeText(generated_password.innerHTML)
          
})


console.log(Boolean(""))

// let randomLetterIndex = () => {
//     return Math.floor(Math.random()*uppercase_letters_length)
// }

// let randomUpperCase = () => {
//     for(let i=0; i<uppercase_letters_length; i++){
//         return uppercaseLetters[randomLetterIndex()]
//     }
// }
// let randomLowerCase = () => {
//     for(let i=0; i<uppercase_letters_length; i++){
//         return lowercaseLetters[randomLetterIndex()]
//     }
// }

// let randomNumber = () => {
//     for(let i=0; i<numbers_length; i++){
//         return numbers[Math.floor(Math.random()*numbers_length)]
//     }
// }

// let randomSymbols = () => {
//     for(let i=0; i< symbols_length;i++){
//         return symbols[Math.floor(Math.random()* symbols_length)]
//     }
// }

// const createPassword = (password_length) => {
//     let password = "";
    
//     for (let i = 0; i< password_length.length; i++){

//     }

//     for(let i=0; i<password_length;i++){
//        let randomNumeris =randomNum()
        
//         if(randomNumeris === 0 ){
//             password += randomUpperCase()
            
//         } else if( randomNumeris === 1){
//             password +=randomLowerCase()
            
//         } else if (randomNumeris === 2){
//             password +=randomNumber()
            
//         } else if (randomNumeris === 3){
//             password += randomSymbols()
        
//         } else {
//             console.log("problema")
//         }
//     }

//     console.log(password)
//     console.log(password.length)
//     return password
