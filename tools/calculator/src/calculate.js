

function isAlnumChar(ch) {
    return /[A-Za-z0-9]/.test(ch);
  }

function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    if (op === '^') return 3;
    return 0;
}
  
function infixToPostfix(infix) {
    let stack = [];
    let postfix = [];
  
    for (let i = 0; i < infix.length; i++) {
        let c = infix[i];

        if (isAlnumChar(c)) {
            postfix.push(c);
        } else if (c === '(') {
            stack.push(c);
        } else if (c === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop(); // remove '('
        } else {
            while (
                stack.length &&
                precedence(stack[stack.length - 1]) >= precedence(c)
            ) {
                postfix.push(stack.pop());
            }
            stack.push(c);
        }
    }

    while (stack.length) {
    postfix.push(stack.pop());
    }
  
    return postfix.join('');
}

// function postfixEval(expression) {
//     let stack = [];
//     let i = 0;
//     while(i < expression.length) {
//         if(expression[i] >= '0' && expression[i] <= '9') {
//             let operand = 0;
//             while(expression[i] >= '0' && expression[i] <= '9') {
//                 operand = operand * 10 + (expression[i] - '0');
//                 i++;
//             }
//             stack.push(operand)
//         } else if(expression[i] === '+' ||
//                   expression[i] === '-' ||
//                   expression[i] === '*' ||
//                   expression[i] === '/') {
//                     let operand2 = stack.pop();
//                     let operand1 = stack.pop();
//                     switch(expression[i]){
//                         case '+': 
//                             stack.push(operand1 + operand2);
//                             break;
//                         case '-': 
//                             stack.push(operand1 - operand2);
//                             break;
//                         case '*': 
//                             stack.push(operand1 * operand2);
//                             break;
//                         case '/': 
//                             stack.push(operand1 / operand2);
//                             break;
//                     }
//         }
//         i++;
//     }
//     return stack.pop();
// }

function postfixEval(expression) {
    let stack = [];
    for (let i = 0; i < expression.length; i++) {
        let c = expression[i];
        if (c >= '0' && c <= '9') {
            stack.push(Number(c));
        } else if ('+-*/'.includes(c)) {
            let b = stack.pop();
            let a = stack.pop();
            switch (c) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        }
    }
    return stack.pop();
}

export function evalExpression(expression) {
    const postfix = infixToPostfix(expression);
    const result = postfixEval(postfix);
}

