/*Gameplan:

HTML:
(*) Calculator window with operations to be shown along with result
() Number buttons for the calculator
() Operator buttons (+, _, *, etc.)
() '=' button
() Reset or clear button

Javascript:
() Function that captures what was typed in the calculatorWindow
() Function that will add numbers, subtract, etc.
 */

function calculate(expression)
{
    //'expression' is a string of everything in your calculator window
    //we need to EXTRACT the first number from the 'expression'
    //expression = 1+2
    var firstNum = Number(expression.substr(0, 1)); //Capture the 1. 0 is the index, length is 1. Convert to numerical data
    var operator = expression.substr(1, 1); //capture the '+'
    var secondNum = Number(expression.substr(2,1)); //Capture the 2

    if (operator === '+') //that means I add firstNum and secondNum
    {
        return addNums(firstNum, secondNum); //returns the result of calling 'addNums'
                                                //after sending it firstNum and secondNum
    }
    else if (operator === '-')
    {
        //call subtract nums, etc.
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '²')
    {
        return square(firstNum);
    }
}

function addNums(p1, p2)
{
    //p1 and p2 are sent to addNums... to do this:
    return p1+p2;
}
function subtractNums(p1, p2)
{
    return p1-p2;
}
function multiplyNums(p1, p2)
{
    return p1*p2;
}
function divideNums(p1, p2)
{
    return p1/p2;
}
function square(p1)
{
    return p1*p1;
}
