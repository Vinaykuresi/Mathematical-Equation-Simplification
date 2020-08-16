// stack initialization
var stack_number = []

//evaluates postfix expression
module.exports.evaluate = (postfix) => {

    var postfixNotation = postfix.split(',')
    var operand1, operand2;
    for (var i = 0; i < postfixNotation.length; i++) {

        if (Number.isInteger(Number(postfixNotation[i]))) {

            // Push the operand
            stack_number.push(Number(postfixNotation[i])) 
        } else {

            //Operator,pop two operands
            operand2 = stack_number.pop()
            operand1 = stack_number.pop()
            switch (postfixNotation[i]) {
                case '+':
                    stack_number.push(operand1 + operand2);
                    break;
                case '-':
                    stack_number.push(operand1 - operand2);
                    break;
                case '*':
                    stack_number.push(operand1 * operand2);
                    break;
                case '/':
                    stack_number.push(operand1 / operand2);
                    break;
            }
        }
    }
    return stack_number[0];
}
