// TODO : 02_foreach.js

// 코딩 역사 : 구조적프로그래밍(절차적) : c언어
//          -> 객체지향프로그래밍 : js, java, c++ , c#, 파이썬
//          -> 함수형프로그래밍 : 클로저 등
// 함수형프로그래밍 (1억) vs 객체지향(5000만원)
// 객체지향 : 40명 -> 5명(함수명) : AT&T (통신사)

// TODO : forEach :
// 용도 : 단순 출력용
// 특징 : 1) return 없음
//        2) break 문 사용불가
// 자동으로 반복문을 실행함(배열의 끝까지)
// 사용법 : 배열변수.forEach((value)=>{반복문;})
let myArr = [1, 2, 3, 4, 5];

// TODO : 향상된 for문으로 진행
for (const i of myArr) {
  // for of 값 반복문 실행
  console.log("향상된 for문 값 : " + " " + i);
}

// TODO : 함수형 프로그래밍 함수로 진행 : forEach((값, 인덱스번호, 배열))=>{}) 인덱스번호, 배열 생략 가능
// 예시 myArr.forEach((value, iddex, array) => {
//   console.log("함수형 프로그래밍 함수 값 : " + " " + value); // 값 반복문 실행
// });

// myArr.forEach((value) => {
//     console.log("함수형 프로그래밍 함수 값 : " + " " + value); // 값 반복문 실행
//   });

myArr.forEach((value, index) => {
  console.log("함수형 프로그래밍 함수 값 : " + " " + value); // 값 반복문 실행
  console.log("함수형 프로그래밍 함수 인덱스 번호 : " + " " + index); // 인덱스 번호 실행
});

// 연습문제

// 1) forEach() 함수 사용해서 출력하기
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((value) => console.log(value));

// 2) forEach() 함수 사용해서 출력하기
let strDummy = ["a", "b", "c", "d", "e"];
strDummy.forEach((value) => console.log(value));