//6가지 요소 조작 메서드
//1. push: 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
//push는 메서드 수행 이후에 변경된된 배열의 길이를 return함

let arr1 = [1,2,3];
const newLength = arr1.push(4, 5, 6);

console.log(newLength); //6
console.log(arr1); //[1,2,3,4,5,6]

//2. pop: 배열의 맨 뒤에 있는 요소를 제거하고 반환하는 메서드

let arr2=[1,2,3,4];
const poppedItem = arr2.pop();
console.log(poppedItem);

//3. shift: 배열의 맨 앞에 있는 요소를 제거하고 반환하는 메서드

let arr3=[0,1,2,3];
const shiftedItem = arr3.shift();
console.log(shiftedItem);

//4. unshifted: 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [2,3];
const newLength2 = arr4.unshift(1);

console.log(newLength2); //3
console.log(arr4); //[1,2,3]

//5. slice: 가위처럼 배열의 특정 범위를 잘라내어 새로운 배열로 반환
// 원본 배열의 값은 바뀌지 않음 
let arr5=[1,2,3,4,5];
let sliced = arr5.slice(2,5); //잘라낼 인덱스의 범위 (시작, 끝+1)을 작성하거나(끝까지 자를 경우 인덱스 생략 가능)
console.log(sliced);

let sliced2 = arr5.slice(-3); //뒤에서부터 몇개의 요소를 잘라낼 것인지 작성하여 사용
console.log(sliced2);

//6. concat: 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);