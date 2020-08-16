const fs = require('fs');

// fetching json files
const simpleObject = JSON.parse(fs.readFileSync('./Json_Files/simple.json', 'utf8'));
const intermediateObject = JSON.parse(fs.readFileSync('./Json_Files/intermediate.json', 'utf8'));
const complexObject = JSON.parse(fs.readFileSync('./Json_Files/complex.json', 'utf8'));

// math expression function from math expression main folder
const {mathExpressionTransform} = require('./Math_Expression_Main_Solution/Expression_transformation');

// bonus : function solving the transformed equation from scratch
// function to convert the json to postfix notation
const {postfixNotation} = require('./Bonus_evaluation_of_equation/PostfixConversion');
// function solving the operation from postfix notation
const {evaluate} = require('./Bonus_evaluation_of_equation/Operation');


// solving the simple json file given in the problem
var [ originalEqation, tranformedEquation, solution ] = mathExpressionTransform(simpleObject)

// solving the simple json file given in the problem, uncomment the below code for the solution
// var [ originalEqation, tranformedEquation, solution ] = mathExpressionTransform(intermediateObject)

// solving the simple json file given in the problem, uncomment the below code for the solution
// var [ originalEqation, tranformedEquation, solution ] = mathExpressionTransform(complexObject)

// printing the equations and the solution
console.log("Original equation : ", originalEqation)
console.log("Transformed equation : ", tranformedEquation)
console.log("Solution of equation : x =",eval(solution))


// Bonus : deriving the solution from the transformed equation from scratch

// for simple json
var postfix = postfixNotation(simpleObject)
var solution = evaluate(postfix)
console.log("Solution of equation from scratch : x = ",solution)

// for intermidiate json
// var postfix = postfixNotation(intermediateObject)
// var solution = evaluate(postfix)
// console.log("Solution of equation from scratch : x = ",solution)

// for complex json
// var postfix = postfixNotation(complexObject)
// var solution = evaluate(postfix)
// console.log("Solution of equation from scratch : x = ",solution)