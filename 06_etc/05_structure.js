// TODO : 05_structure.js
// TODO : 구조분해 할당

// 모던자바스크립트(===ECMAScript) 신기능
// TODO : 1) 배열 구조분해 할당 : 가독성 증가(향상)
// 예제) 일반 코딩
// 변수명만 보고 추측이 가능하게 이름을 짓는것이 좋음 :
let array_1 = [1, 2]; // 숫자 배열(가독성 저하)
console.log(array_1[0], array_1[1]); // 1 2

// 예제) 구조분해 할당 : 위에꺼 고침
let [firstNum, secondNum] = [1, 2];
// firstNum=1, secondNum=2
console.log(firstNum, secondNum); // 1 2

// TODO 연습문제 1) 배열 구조분해 할당 문제
// 아래와 같이 배열이 있습니다. 구조분해 할당 이용해서 출력하세요
// 입력 : x
// 출력 : hello node react

let array_2 = ["hello", "node", "react"];
let [str2_1, str2_2, str2_3] = array_2;

console.log(array_2);
console.log(str2_1, str2_2, str2_3);

// TODO : 2) 객체 구조분해할당
// 객체의 속성 값을 분해해서 다른 변수에 저장
// 예제 2)
let candyMachine = {
  name: "캔디",
  count: 5,
};

// 1번째 방법
// 결과 출력
console.log(candyMachine.name, candyMachine.count); // 캔디 5

// 2번째 방법 : 객체 구조분해 할당
// 객체의 속성명과 동일한 변수명을 찾아서 저장됨
// 사용법 : let {속성명, 속성명2 ...} = {속성명:값, 속성명2: 값2 ...}
// 결과 출력
let { name, count } = candyMachine;
console.log(name, count);

// TODO 연습문제 2) 객체 구조분해 할당 문제
// 아래와 같이 객체가 있습니다. 구조분해 할당 이용해서 출력하세요
let dept = {
  no: 1,
  dname: "Sales",
  loc: "부산",
};

let { no, dname, loc } = dept;
console.log(no, dname, loc);
