f123();
console.log('A');
console.log('Z');
console.log('B');
f123();
console.log('F');
console.log('C');
console.log('P');
console.log('J');
f123();
console.log('U');
console.log('A');
console.log('Z');
console.log('J');
console.log('I');
f123();

function f123(){
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
};

/**
 * callback function을 받는 함수를 정의하는데,
 * 내부에서 함수를 실행한다.
 */
function exam(x, y, callback) {
  return callback(x, y);
}

function callback1(x, y) {
  return  x * y;
}

function callback2(x, y) {
  return x + y;
}

function callback3(x, y) {
  return x / y;
}

/**
 * callback function을 받는 함수를 실행하면서 위에 callback1 ~ 3을 변경하면서 실행해본다.
 * 그러면 결과가 각자 다른데, 이와 같이 함수 내부에서 실행되는 callback함수라고 한다.
 * 이렇게 콜백함수를 통해 다른 값을 얻을 수 있다.
 */
const result = exam(3, 6, callback1);
