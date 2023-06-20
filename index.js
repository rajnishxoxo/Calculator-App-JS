
let outputScreen = document.querySelector(".output")

let allClear = document.getElementById('all-clear');

let deleteButton = document.getElementById("delete");

let equalsButton = document.getElementById("equals");

let numberButtons = document.querySelectorAll(".btn");

let operations = document.querySelectorAll(".oprator");

let previousScreen = document.getElementById("previous-output")


let currentScreen = document.getElementById("current-output")

let currentValue ="";

let previousValue = '';

let oprator = '' 


numberButtons.forEach(function(numberButtons){
    numberButtons.addEventListener('click' , function(e){
        handleNumber(e.target.textContent)

        currentScreen.textContent = currentValue
    })
})


function handleNumber(num){
    currentValue +=num
    
}

operations.forEach(function(operations){
    operations.addEventListener('click' , function(e){
    
        handleOperator(e.target.textContent)
       previousScreen.textContent =previousValue +" " + oprator

       currentScreen.textContent = currentValue
    
    })
})

function handleOperator(op){
    oprator=op
    previousValue = currentValue
    currentValue ="";
}


allClear.addEventListener('click' ,function(){
    previousScreen.textContent=''
    currentScreen.textContent=''
    currentValue =''
    previousValue=''
    oprator=''
})


equalsButton.addEventListener('click' , function(){
    calculation()
    previousScreen.textContent =""

    if(previousValue.length<=5){
        currentScreen.textContent = previousValue
    }else{
        currentScreen.textContent = previousValue.slice(0,5)+"..."
    }

   
})


function calculation(){

    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(oprator==="+"){
        previousValue+=currentValue;
    }else if(oprator==="-"){
        previousValue-=currentValue;
    }else if(oprator==="*"){
        previousValue*=currentValue;
    }else{
        previousValue/=currentValue;
    }

    previousValue = roundOff(previousValue);

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundOff(num){
    return Math.round(num*1000)/1000;
}