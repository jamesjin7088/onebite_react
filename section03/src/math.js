// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// common js module 방식으로 내보내기
// module.exports = {
//   add,
//   sub,
// };

// es module system
// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
