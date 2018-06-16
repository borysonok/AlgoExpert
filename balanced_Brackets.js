let lefts = '({[';
let rights = ')}]';

function balancedBrackets(originalString) {
    const stackOfBrackets = [originalString[0]];

    for (let i = 1; i < originalString.length; i++) {
        let current = originalString[i];

        if (stackOfBrackets.length > 0) {
            let lastInStack = stackOfBrackets[stackOfBrackets.length - 1];
            if (match(lastInStack, current)) {
                stackOfBrackets.pop();
            } else {
                stackOfBrackets.push(current);
            }
        } else {
            stackOfBrackets.push(current);
        }

        console.log('result:', stackOfBrackets);
    }

    return stackOfBrackets.length === 0;
}


function match(left, right) {
    console.log('maching:', left, right);
    return lefts.indexOf(left) === rights.indexOf(right);
}


console.log(balancedBrackets('()[]{}')); // true
console.log(balancedBrackets('()[]{}{')); // false