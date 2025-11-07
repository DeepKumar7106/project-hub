//fix evaluation of expression within the parenthesis and 
//display well defined error messages
const operators = document.querySelectorAll('.operators');
const result = document.getElementById('result');
const resultPara = document.getElementById('result-para');
const check= ["(", "/", "*", "+", "-","%"];
let resultString = "",
    bracketStateCount = 0,
    caseDot = true,
    displayString = ""; 


//solves overflowing of elements from result
const buttonBox = document.getElementById('button-box');
const widthPx = buttonBox.offsetWidth;
document.getElementById('output').style.width = widthPx + "px";


operators.forEach(operator => {
    operator.addEventListener('click', ()=> {
        const resultStringValue = operator.getAttribute('data-value');
        if(resultStringValue === ".") {
            if(!caseDot) {
                return
            }
            caseDot = false;
        }

        displayString += resultStringValue;
        resultString += resultStringValue;
        result.innerHTML = displayString;
        if(!check.includes(resultStringValue))
            resultPara.innerHTML = evaluateAndUpdate(resultString);
    });
    
});

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', ()=> {
        caseDot = true;
    })  
})

function evaluateAndUpdate(expression) {
    try{
        // if(previousValue === "%")
        return eval(expression);
    }
    catch (error) {
        console.error(error.message);
    }
}

function renderExpression(resultString) {

}

//functuional key event definations
const allClear = document.querySelector('.allClear');
allClear.addEventListener('click', ()=> {
    resultString = "";
    bracketStateCount = 0;
    caseDot = true; 
    displayString = "";
    result.innerHTML = "";
    resultPara.innerHTML = "";
});

const equalTo = document.querySelector('.equalTo');
equalTo.addEventListener('click', ()=> {
    result.innerHTML = resultPara.innerHTML;
    resultString=resultPara.innerHTML;
    resultPara.innerHTML = "";
})

const modulusOperator = document.querySelector('.modulusOperator');
modulusOperator.addEventListener('click', ()=> {
    // resultString *= 0.01;
    let beginIndex = 0;
    for(let i = resultString.length; i >=0; i--) {
        if(check.includes(resultString[i])) {
            beginIndex = i+1;
            break;
        }
    }

    let dividedOutput = resultString.slice(beginIndex, resultString.length);
    dividedOutput *= 0.01;
    resultString = resultString.slice(0, beginIndex);
    displayString += "%";
    resultString += dividedOutput + "*";
    result.innerHTML = displayString;
})

// let bracketType = "("    
const bracket = document.querySelector('.bracket');
bracket.addEventListener('click', ()=> {
    const lastChar = resultString[resultString.length - 1];
    const canOpen = check.includes(lastChar);

    const bracketType = bracketStateCount === 0 || canOpen ? '(' : ')';
    bracketStateCount += bracketType === '(' ? 1 : -1;
    
    // if(bracketStateCount) {
    //   if(check.includes(resultString[resultString.length - 1])) {
    //         bracketStateCount++;  
    //         bracketType = "(";
    //       }
    //       else {
    //           bracketType = ")";
    //           bracketStateCount--; 
    //       }
    // }
    // else {
    //     bracketStateCount++;
    //     bracketType = "(";
    // }
    resultString += bracketType;
    displayString += bracketType;
    result.innerHTML = displayString;
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', ()=> {
    const resultStringLastIndex = resultString.length - 1;
    const deletedValue = resultString[resultStringLastIndex];
    switch(deletedValue) {
        case ".":
            caseDot = true;
    }
    displayString = displayString.slice(0, displayString.length-1)
    resultString = resultString.slice(0, resultStringLastIndex);
    result.innerHTML = displayString;
    resultPara.innerHTML =resultString;
})

