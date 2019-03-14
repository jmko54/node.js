const arr = [
  [1, 2, 3, 4,],
  [4, 2, 3, 5,],
  [4, 2, 3, 5,],
  [4, 2, 3, 5,],
  [4, 2, 3, 5,],
  [4, 2, 3, 5,],
  [4, 2, 3, 5,],
  [4, 2, 3, 5,],
  [4, 2, 3, 5,],
]

const arr2 = []
function cal([a, b, c, d]) {
  return a + b + c - d;
}

for(let prop of arr) {
  result = cal(prop);
  arr2.push(result);
}

console.log(arr2)
