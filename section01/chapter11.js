// 함수

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  let area = width * height;

  return area;
}
