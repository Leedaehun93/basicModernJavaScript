// TODO : 01_spread.js
// TODO : spread(스프레드 연산자) 연산자

// TODO : 1) 배열의 복사 : 원본을 훼손하지 않음(*)
// 리액트 많이 나옴 : 배열의 복사본을 이용해서 코딩
// 사용법 : ...배열변수; // 배열값을 복사함
// 예제 1) 숫자 배열 복사
let arr1_1 = [1, 2, 3, 4, 5];
[1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1_2 = [...arr1_1, 6, 7, 8, 9];
console.log(arr1_2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 예제 2) 문자열 배열 복사
let str2_1 = "paper block";
let str2_2 = [...str2_1];
console.log(str2_2); // ['p', 'a', 'p', 'e', 'r', ' ', 'b', 'l', 'o', 'c', 'k']

// 예제 3) 배열 2개 붙이기
let arr3_1 = [1, 2, 3];
let arr3_2 = [4, 5, 6];

let arr3 = [...arr3_1, ...arr3_2];
console.log(arr3); // [1,2,3,4,5,6]

// TODO : 2) 향상된 for문 : 인덱스번호 자동증가
let arr = [1, 2, 3, 4, 5, 6];

console.log("일반");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("향상");
for (const e of arr) {
  console.log(e); // e : 배열의 값
}

// TODO : 3) 함수에서의 스프레드 연산자 사용 예(참고)

// TODO 3-1) 함수 매개변수 : rest 연산자(==스프레드 연산자)
// 용도 : 매개변수들을 모두 더해서 합계를 구하는 함수
// function add(...rest) {
//     let sum = 0;
//     for (const item of rest) {
//         sum = sum + item; // item == 배열의(매개변수들의) 값
//     }
//     return sum;
// }
// console.log(add(1)); // 1
// console.log(add(1, 2)); // 3
// console.log(add(1, 2, 3)); // 6

// TODO 3-2) js 내장 함수에서의 스프레드 연산자 응용하여
// TODO      아래에서 최소값 구하기

let numbers = [9, 4, 7, 1];
let result = Math.min(...numbers); // 1
console.log(result);

// TODO 3-3) 객체에서의 스프레드 연산자 사용
// TODO      객체의 속성이 없으면 추가되고, 있으면 수정됨

let currentState = {
  name: "철수",
  species: "human",
};
console.log(currentState);

// 사용법 : ...객체변수
// 객체 속성 추가
currentState = { ...currentState, age: 10 };
console.log(currentState);

// 객체 속성 수정
currentState = { ...currentState, age: 12 };
console.log(currentState);