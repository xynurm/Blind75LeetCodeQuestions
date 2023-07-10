var isValid = function (s) {
    let stack = [];

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (!stack.length ||
                (char === ')' && stack[stack.length - 1] !== '(') ||
                (char === '}' && stack[stack.length - 1] !== '{') ||
                (char === ']' && stack[stack.length - 1] !== '[')) {
                return false;
            }
            stack.pop();
        }

    }
    return !stack.length
};