// definition of the string operation

module.exports.OperatorDefinition = function(op){

    switch(op) {
        case "equal": return "=";
                      break;
        case "add":  return "+";
                      break;
        case "subtract": return "-";
                     break;
        case "multiply": return "*";
                         break;
        case "divide" : return "/";
                        break;
        default: return op
    }
}