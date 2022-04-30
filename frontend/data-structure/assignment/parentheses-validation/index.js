const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    if(s === ""){
        return false;
    }
    if(s.length % 2 !== 0){
        return false;
    }

    let stack = new Stack();
    for(let i = 0; i < s.length; i++){
        stack.push(s.charAt(i));
    }
    let temp = stack.data;

    if (temp[temp.length-1] === "(" || temp[temp.length-1] === "{" || temp[temp.length-1] === "[") {
        return false;
    }
    if (temp.includes("(") && temp.includes(")") || temp.includes("{") && temp.includes("}") || temp.includes("[") && temp.includes("]")) {
        if (temp.indexOf("(") > temp.indexOf(")") || temp.indexOf("{") > temp.indexOf("}") || temp.indexOf("[") > temp.indexOf("]")) {
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}

console.log(IsValidParentheses(""));
console.log(IsValidParentheses("()"));
console.log(IsValidParentheses("()[]{}"));
console.log(IsValidParentheses("{[()]"));   
console.log(IsValidParentheses("[()]}"));   
console.log(IsValidParentheses("[{)]"));
console.log(IsValidParentheses("({{"));
console.log(IsValidParentheses("]])"));

module.exports = {
    IsValidParentheses
}