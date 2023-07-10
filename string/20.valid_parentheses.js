/*Approach:
Here is the step-by-step approach of the algorithm:
1. Initialize an empty stack.
2. Loop through each character in the input string.
3. If the current character is an opening bracket (i.e., '(', '{', '['), push it onto the stack.
4. If the current character is a closing bracket (i.e., ')', '}', ']'), check if the stack is empty. If it is empty, return false, because the closing bracket does not have a corresponding opening bracket. Otherwise, pop the top element from the stack and check if it matches the current closing bracket. If it does not match, return false, because the brackets are not valid.
5. After loop each character in the input string, check if the stack is empty, return true, because all opening brackets have been matched with their corresponding closing brackets. Otherwise, return false, because some opening brackets have not been matched with their corresponding closing brackets.
*/

var isValid = function (s) {
    let stack = []; // init empty stack

    for (let char of s) {  // loop through each character in the input string.
        if (char === '(' || char === '{' || char === '[') { // If the current character is an opening bracket (i.e., '(', '{', '[').
            stack.push(char); // Push it onto the stack.
        } else {
            if (!stack.length ||  // if the stack is empty or 
                (char === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
                (char === '}' && stack[stack.length - 1] !== '{') ||
                (char === ']' && stack[stack.length - 1] !== '[')) {
                return false; // the string is not valid, so return false
            }
            stack.pop(); // otherwise, pop the opening bracket from the stack
        }

    }
    return !stack.length // If the stack is empty and all parentheses have been matched, return True. Otherwise, return False.
};