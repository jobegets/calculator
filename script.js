let add = (a, b) => (parseInt(a) + parseInt(b));
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
        result = (divide(f,s)).toFixed(2); // 2 decimal places
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

let eval = () =>{
    if (userOp == '/' && userSecondNum == 0){ // divide by 0
        output.textContent = '';
        userFirstNum = null;
        userSecondNum = null;
        userOp = '';
        return;
    }
    userSecondNum = output.textContent;
    result = operate(userOp, userFirstNum, userSecondNum);
    console.log(userOp, userFirstNum, userSecondNum);
    console.log(result); 
    output.textContent = result;
    // once a result is computed, store result as the first num and reset second num
    userFirstNum = result;
    userSecondNum = null;
}

buttons.addEventListener('click',  function(event){
    validNums = [0,1,2,3,4,5,6,7,8,9];
    validOps = ['+', '-', '/', 'x'];
    targetId = parseInt(event.target.id);
    if (validNums.includes(targetId)){ // if user clicks a number
        if (userFirstNum != null){ // second time
            if (userSecondNum != null){ // for the second num, we are inputting a >1 digit num
                populate(targetId);
                userSecondNum = output.textContent;
            }
            else{ 
            output.textContent = '';
            populate(targetId);
            userSecondNum = output.textContent;
            }
        }
        else{
            populate(targetId);
        }
      
    }
    else if (validOps.includes(event.target.id)){ // if user clicks an operator
        console.log('hi');
        if (userFirstNum == null){
            
            userOp = event.target.id; 
            userFirstNum = output.textContent;
    
        }
        // e.g. : 12+7*3-5 =  ... 
        else if (userFirstNum != null && userSecondNum != null){ // case where user clicks an operator after getting first & sec nums
    
            eval();
            // after eval last pair we are getting the new operator that triggered this 
            userOp = event.target.id;
        }
        else{ // if first num was prev result
            userOp = event.target.id;
        }
     
    } 
    else if (event.target.id == '='){ // if user wants to evaluate
        if (userFirstNum == null || userSecondNum == null){ // user evaluates without valid input
            output.textContent = '';
            userFirstNum = null;
            userSecondNum = null;
        }
        else{
            eval();
        }
    }
    else if (event.target.id == 'AC'){ // clear button
        userFirstNum = null;
        userSecondNum = null;
        output.textContent = '';
    }
});

