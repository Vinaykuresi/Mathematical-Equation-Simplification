//opposite sign of the symbols

const OppOperator = (op)=> {
    switch(op) {
        case "+":  return "-";
                      break;
        case "-": return "+";
                     break;
        case "*": return "/";
                         break;
        case "/" : return "*";
                        break;
        default: return op
    }
}

module.exports = {OppOperator}