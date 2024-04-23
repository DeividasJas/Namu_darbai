const buttons = document.querySelectorAll('#btn')
const display = document.getElementById('results')
const result = document.getElementById('equal')
const reset = document.getElementById('btn_reset')
const dot = document.getElementById('btn_dot')
const delbtn = document.getElementById('btn_del')


console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.innerText !=="x"){
            display.innerText += button.innerText
        } else {
            button.setAttribute('value', "*")
            display.innerText += button.value
        }
    })
})

result.addEventListener('click', ()=>{
    
    try{
        let sprendimas = eval(display.innerText)
        display.innerText = sprendimas

    } catch(error){
        alert("Neteisingai ivesti duomenys")
    }
})

reset.addEventListener('click', ()=>{
    display.innerText =""
})

dot.addEventListener('click', ()=>{
    if(display.innerText.endsWith('.')){
       return 
    }
    if(!(display.innerText.endsWith('.'))){
        display.innerText += "."
    }
})

delbtn.addEventListener('click', ()=>{
    display.innerText = display.innerText.slice(0, -1)
    
})

