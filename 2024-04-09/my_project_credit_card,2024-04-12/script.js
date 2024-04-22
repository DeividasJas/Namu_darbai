// console.log('hello')

// let cardNumber = document.getElementById("cardnum")

// let textFromDOM = cardNumber.textContent

// console.log(textFromDOM)

// let insertText = document.getElementById("insertTextDOM")

// insertText.innerHTML = cardNumber.innerHTML

// const displayData = () => {
//   let username = document.getElementById("name");

//   let usernameValue = username.value;
//   console.log(usernameValue);
// };

// ------------------------------------------------------
//  2024 -04- 10

let username = "Vardenis Pavardenis";
let num = "0000000000000000";
let yy = "00";
let mm = "00";
let cvc = "000";


// FORMA IR FORMOS INPUTS -----------------------------------------------
let  form = document.getElementById("card_form")

let cardHolderName = document.getElementById("name");
let cardNum = document.getElementById("num");
let expMM = document.getElementById("mm");
let expYY = document.getElementById("yy");
let cardCVC = document.getElementById("cvc");
// -----------------------------------------------------------------------------
// --FLOATING CARD SPANS -------------------------------------------------------
let floatCVC = document.getElementById("float-cvc");
let floatCardNum = document.getElementById("float-card_num");
let floatName = document.getElementById("floatName");
let floatMM = document.getElementById("floatMM");
let floatYY = document.getElementById("floatYY");

//-----------------------------------------------------------

let child1 = document.getElementById("form_content_grid");
let child2 = document.getElementById("completed");

let completeButton = document.getElementById("complete_button");

const showCardInfo = () => {
  floatCardNum.innerHTML = cardNum.value;
  floatName.innerHTML = cardHolderName.value;
  floatCVC.innerHTML = cardCVC.value;
  floatMM.innerHTML = expMM.value;
  floatYY.innerHTML = expYY.value;
};

const switchCard = () => {
  child1.style.right = "1000px";
  child1.style.transition = "right 0.5s ease";

  // child1.style.display = "block";
  // child1.style.color = "red";
  child2.style.left = "0px";
  child2.style.transition = "left 0.5s ease";
};

const complete = () => {
  floatName.innerHTML = username;
  floatCVC.innerHTML = cvc;
  floatCardNum.innerHTML = num;
  floatMM.innerHTML = mm;
  floatYY.innerHTML = yy;

  child2.style.left = "1000px";
  child2.style.transition = "left 0.5s ease";

  child1.style.right = "0px";
  child1.style.transition = "right 0.5s ease";

  cardHolderName.value = null;
  cardNum.value = null;
  expMM.value = null;
  expYY.value = null;
  cardCVC.value = null;
};


// PARAGRAFOS KUR DESIU NETEISINGA RAUDONA TEKSTA ----------------------------------
var userNameParagraph = document.getElementById("userName_paragraph");
var cardNumberParagraph = document.getElementById("cardNumber_paragraph");


// DVI FUNKCIJOS KURIOS NAUDOJAME GERU / BLOGU INPUT ATVEJU----------------------

const showRedParagraph = (which, whichText) => {
  which.style.height = "0.9rem"
  which.innerHTML = whichText;

};

const correctInput = (inputID) => {
  inputID.style.border = "2px solid green";
};
//---------------------------------------------------------------------------------


// --- VISU INPUT TINKAMI PATERNS -----------------------------------------------
let patternName = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
let patternCard = /^[0-9]{12}$/;
let patternMM = /^(0[1-9]|1[0-2])$/;
let patternYY = /^(?:20)\d{2}$/;
let patternCVC = /^\d{3}$/;
// -----------------------------------------------------------------------------

// PAGRINDINE FUNKCIJA --------------------------------------------------------
// document.querySelector("#card_form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   // showCardInfo();
//   // switchCard();

//   // ---- IF STATEMENT JEIGU VARDAS BLOGAS---- PVZ RED BORDER----------

//   if (!patternName.test(cardHolderName.value)) {


//     showRedParagraph(userNameParagraph, "Wrong format, no numbers");

//     console.log("Vardas ivestas - blogai");

//   } else {
//     console.log("Vardas ivestas gerai - ", cardHolderName.value);
//     correctInput(cardHolderName);
//   }

//   if (!patternCard.test(cardNum.value)) {
//     showRedParagraph(cardNumberParagraph, "Wrong format, only numbers!");

//     console.log("Korteles duomenys ivesti blogai - ", cardNum.value);
//   } else {
//     correctInput(cardNum);
//     console.log("Korteles duomenys suvesti gerai");
//   }
// });
// --------------------------------------------------------------------------------------




document.getElementById("card_form").addEventListener("submit", (event)=>{
  event.preventDefault();
  console.log(patternMM.test(expMM.value))

})

const validation_cardMM = () => {
  if(!patternMM.test(expMM.value)){
    showRedParagraph(cardMM_paragraph, 'Netinkamas formatas')
  }
  
}

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  validation_cardMM()
})











// var inputs = document.querySelectorAll("input")
// console.log(inputs)


// inputs.forEach(input => {
//   input.addEventListener("focus", () => {
//     document.body.
// })
// })




// completeButton.addEventListener("click", () => {
//   complete();
// });
// ------------- form ---------------------------------

// const form = document.getElementById("grid_form");
// const usernameInput = document.getElementById("name");

// usernameInput.addEventListener("input", () => {
//   console.log('hello')
//   if (this.ValidityState.patternMismatch) {
//     this.setCustomValidity("Please enter valid username");
//   } else {
//     this.setCustomValidity("");
//   }
// });

// const checkCreditCardValue = () => {
//   let errorMessage = ""
//   if(!(cardNum.value ))
// }
