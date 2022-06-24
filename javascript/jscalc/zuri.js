
function calc(){
let firstNumber = parseInt(prompt("provide a  first number.."));
let indicator =  prompt("pick an indicator..eg. /, *, +, - .");
let secondNumber = parseInt(prompt("provide a second number.."));
let sum ;

    if (indicator == "+" ){
         sum = firstNumber + secondNumber
        alert(sum)
    }
    else if(indicator == "/" ){
        sum = firstNumber / secondNumber
        alert(sum)
    }
    else if(indicator == "*" ){
        sum = firstNumber * secondNumber
        alert(sum)
    }
    else if(indicator == "-" ){
        sum = firstNumber - secondNumber
        alert(sum)
    }

    else{
        alert("oopps.... something went wrong...try again ")
    }


}
calc();