
// fetching the required operations
const {OperatorDefinition} = require("../Math_Expression_Main_Solution/OperatorDefinition");
const {OppOperator} = require("../Math_Expression_Main_Solution/oppOperator");

// intializing the required variables
var solution = ""
var jsonObject = {}

// Recursive function conveting the json object to postfix notation
const mathExpression = function (jsonObject)
{
    // Code to create the Postfix Notation(solution)
    if (typeof jsonObject["lhs"] == "object"){
        solution = solution+','+jsonObject['rhs']+','+OppOperator(OperatorDefinition(jsonObject['op']))
        mathExpression(jsonObject["lhs"]);
    }
    else if(typeof jsonObject["rhs"] == "object") {
        solution = solution+','+jsonObject['lhs']+','+OppOperator(OperatorDefinition(jsonObject['op']))
        mathExpression(jsonObject["rhs"]);
    }
    else{
        if(jsonObject['lhs']=='x'){
            solution = solution+','+jsonObject['rhs']+','+OppOperator(OperatorDefinition(jsonObject['op']))
        }else{
            solution = solution+','+jsonObject['lhs']+','+OppOperator(OperatorDefinition(jsonObject['op']))
        }
    }

}

// initial function called to fetch the original and transformed equation
function postfixConversion(jsonMathToken) {

    // making eqations from the json file
     solution = ""+jsonMathToken['rhs']
     jsonObject = jsonMathToken['lhs']

    //  passing the inner json object from the given math json file
     mathExpression(jsonObject)

     return solution

}

// exporting the postfixConversion
module.exports.postfixNotation = postfixConversion;
