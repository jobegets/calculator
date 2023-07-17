let add = (a, b) => (a + b);
let subtract = (a,b) => (a-b);
let multiply = (a,b) => (a*b);
let divide = (a,b) => (a/b);

const first = 0;
const operator = "";
const second = 0;

let operate = (op,f, s) => {
    result = 0;
    if (op == "+"){
        result = add(f, s);
    }
    else if (op == "-"){
        result = subtract(f,s);
    }
    else if (op == "x"){
        result = multiply(f,s);
    }
    else if (op == "/"){
        result = divide(f,s);
    }
    return result;
}

const output = document.getElementById("output");
let populate = (num) => {
    currVal = output.textContent;
    newVal = currVal + num.toString();
    output.textContent = newVal;
}

const buttons = document.getElementById("nums");

userOp = '';
userFirstNum = null;
userSecondNum = null;

buttons.addEventListener('click',  function(event){
    validNums = [0,1,2,3,4,5,6,7,8,9];
    validOps = ['+', '-', '/', 'x'];
    targetId = parseInt(event.target.id);
    if (validNums.includes(targetId)){ // if user clicks a number
       populate(targetId);
    }
    else if (validOps.includes(event.target.id)){ // if user clicks an operator
        if (userFirstNum == null){
           
            userOp = event.target.id; 
            userFirstNum = output.textContent;
            output.textContent = '';
    
        }
        else{ // user already has a first number
            userSecondNum = output.textContent;
            console.log(userSecondNum);
            console.log(userFirstNum);
        }
    } 
    else{ // if user wants to evaluate
        userSecondNum = output.textContent;
        result = operate(userOp, userFirstNum, userSecondNum);
        
        console.log(userOp, userFirstNum, userSecondNum);
        console.log(result); 
        output.textContent = result;
        
    }
});

