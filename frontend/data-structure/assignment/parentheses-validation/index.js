const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    if (s === "") {
        return false
    }
    let stack = new Stack()
    let map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }   
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i])
        } else {
            if (stack.peek() === map[s[i]]) {
                stack.pop()
            } else {
                return false
            }
        }
    }

}
// console.log(IsValidParentheses(""));    //false
// console.log(IsValidParentheses("()"));  //true
// console.log(IsValidParentheses("()[]{}"));  //true
// console.log(IsValidParentheses("{[()]"));   //false
// console.log(IsValidParentheses("[()]}"));   //false
// console.log(IsValidParentheses("[{)]"));    //false
// console.log(IsValidParentheses("({{"));    //false
// console.log(IsValidParentheses("]])"));   //false

module.exports = {
    IsValidParentheses
}
