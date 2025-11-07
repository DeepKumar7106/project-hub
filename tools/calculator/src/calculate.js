

let stack = [];
let topValue = -1;

function peek() {
    return stack[topValue];
}

function isAlnumChar(ch) {
    return /[A-Za-z0-9]/.test(ch);
  }

function presedence(charac) {
    if(charac === '+' || charac === '-')
        return 1;
    if(charac === '*' || charac === '/')
        return 2;
    if(charac === '^')  
        return 3;
}

function infixToPostfix(infix) {
    let postfix = [];
    let j = 0;
    let len = infix.length;
    for(let i = 0; i <= len; i++) {
        let c = infix[i];
        console.log(c);
        if(isAlnumChar(c))
            postfix[j++] = c;
        else if(c === '(')
            stack.push(c);
        else if(c === ')') {
            while(peek()!== '(')
                postfix[j++] = stack.pop();
            stack.pop();        
        } else {
            while( topValue !== -1 && presedence(peek()) >= presedence(c)){
                postfix[j++] = stack.pop();
                push(c);
            }
        }
    }
    while(topValue !== -1) 
        postfix[j++] = stack.pop();
    console.log(String(postfix[2]));
}


infixToPostfix('a+b');
