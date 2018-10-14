// O(2^n)-time; O(n)-space
function getNthFib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

// O(n)-time; O(n)-space
function getNthFib(n) {
  let solved = { 1: 0, 2: 1, 3: 1 };
  if (n in solved) {
    return solved[n];
  } else {
    solved[n] = getNthFib(n - 1) + getNthFib(n - 2);
    return solved[n];
  }
}

// O(n)-time; O(1)-space
function getNthFib(n) {
  let lastTwo = [0, 1];
  let i = 3;
  while (i <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    i++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
