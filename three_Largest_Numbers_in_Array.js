function findThreeLargestNumbers(array) {
    const threeLargest = [null, null, null];
    for (const curNum of array) {
        updateTreeLargest(curNum, threeLargest);
    }
    return threeLargest;
}

function updateTreeLargest(curNum, threeLargest) {
    if (threeLargest[2] === null || curNum > threeLargest[2]) {
        shiftAndUpdate(threeLargest, curNum, 2);
    }
    else if (threeLargest[1] === null || curNum > threeLargest[1]) {
        shiftAndUpdate(threeLargest, curNum, 1);
    }
    else if (threeLargest[0] === null || curNum > threeLargest[0]) {
        shiftAndUpdate(threeLargest, curNum, 0);
    }
}

function shiftAndUpdate(array, numToAdd, idx) {
    for (let i = 0; i < idx; i++) {
        array[i] = array[i + 1];
    }
    array[idx] = numToAdd;
}
