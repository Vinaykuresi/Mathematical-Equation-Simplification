
// fetching the required operations
const {OperatorDefinition} = require("./OperatorDefinition");
const {OppOperator} = require("./oppOperator");

// intializing the required variables
var equation = ""
var solution = ""
var jsonObject = {}

// Recursive function solving both Pre-Expression(equation) and Post-Expression(solution)
const mathExpression = function (jsonObject)
{
    // Code to create the Post-Expression(solution)
    if (typeof jsonObject["lhs"] == "object"){
        solution = "("+solution+OppOperator(OperatorDefinition(jsonObject['op']))+jsonObject['rhs']+")"
        mathExpression(jsonObject["lhs"]);
    }
    else if(typeof jsonObject["rhs"] == "object") {
        solution = "("+solution+OppOperator(OperatorDefinition(jsonObject['op']))+jsonObject['lhs']+")"
        mathExpression(jsonObject["rhs"]);
    }
    else{
        if(jsonObject['lhs']=='x'){
            solution = solution+OppOperator(OperatorDefinition(jsonObject['op']))+jsonObject['rhs']
        }else{
            solution = solution+OppOperator(OperatorDefinition(jsonObject['op']))+jsonObject['lhs']
        }
        equation = "("+jsonObject['lhs']+OperatorDefinition(jsonObject['op'])+jsonObject['rhs']+")"
    }

    // Code to create the Pre-Expression(equation)
    if (typeof jsonObject["lhs"] == "object"){
        equation = "("+equation + OperatorDefinition(jsonObject['op']) + jsonObject['rhs']+")"
    }else if(typeof jsonObject["rhs"] == "object"){
        equation = "("+jsonObject['lhs'] + OperatorDefinition(jsonObject['op']) + equation+")"
    }

}

// initial function called to fetch the original and transformed equation
function mathExpressionTransform(jsonMathToken) {

    // making eqations from the json file
     solution = ""+jsonMathToken['rhs']
     equation = ""
     jsonObject = jsonMathToken['lhs']

    //  passing the inner json object from the given math json file
     mathExpression(jsonObject)

    //  fomatting the original and transformed equations
     equation = equation.slice(1,equation.length-1)+"="+jsonMathToken['rhs']
     transformedEquation = "x="+solution

     return [ equation, transformedEquation, solution ]

}

// exporting the mathExpressionTransform equation
module.exports.mathExpressionTransform = mathExpressionTransform;