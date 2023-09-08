// TODO : 04_filter.js
// TODO : filter 함수

// 함수의 조건이 참인 것만 뽑아서 몇 개만 새로운 배열을 만듬
// 원본 배열보다 개수가 작음
// 특징 : 리턴 값 있음
// 사용법 : let 변수 = 배열변수.filter((value)=>{조건문;})

// 예제 1) 아래 배열에서 3보다 큰수만 뽑아서 새오룬 배열 만들기
let numbers_1 = [1, 2, 3, 4, 5];

let result_1 = numbers_1.filter((value_1) => value_1 > 3);
console.log(result_1);

// 예제 2) 객체 조작
// 돈이 300000 초과한 사람만 뽑아서 새로운 배열로 만드세요.
let guys = [
  { name: "YD", money: 500000 },
  { name: "Bill", money: 400000 },
  { name: "Andy", money: 300000 },
  { name: "Roky", money: 200000 },
];
let rich = guys.filter((man) => man.money > 300000);
console.log(rich);

// 연습문제 1) filter 함수 사용해서 조작하세요
// 결과 : [1, 2]
// 조건 : value < 3
let numbers = [1, 2, 3, 4, 5];
let result = numbers.filter((value) => value < 3);
console.log(result);

// 연습문제 2) filter 함수 사용해서 조작하세요
// 결과 : [3]
// 조건 : value > 2 && value < 4
let numbers_2 = [1, 2, 3, 4, 5];
let result_2 = numbers_2.filter((number_2) => number_2 > 2 && number_2 < 4);
console.log(result_2);