//5가지 요소 순회 및 탐색 메서드

//1. forEach: 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
//매개 변수로 현재요소, 반복 카운트. 원본 배열을 전달
let arr1 = [1,2,3];
arr1.forEach(function(item,idx, arr){
    console.log(idx, item*2);
}); //콜백함수를 매개변수로 넘겨준다

let doubledArr =[];
arr1.forEach((item)=>{
    doubledArr.push(item*2);
});
console.log(doubledArr);

//2. includes: 배열에 특정 요소가 있는지 확인하는 메서드
let arr2=[1,2,3];
let isIncluded =arr2.includes(10);
console.log(isIncluded); //false

//3. indexOf: 특정 요소의 인덱스를 찾아서 반환
//배열에 중복되는 값이 존재하면 그 중 인덱스가 가장 작은 것이 반환됨
let arr3=[1,2,3];
let index=arr3.indexOf(2);
console.log(index); //1

//4. findIndex: 모든 요소를 순회하면서. 콜백함수를 만족하는(참이 되는는) 특정 요소의 인덱스를 찾아서 반환
let arr4=[1,2,3];
const findedIndex = arr4.findIndex((item)=>item%2 !==0);
console.log(findedIndex);


//indexOf와 findIndex의 차이: 객체에 대해서 인덱스를 찾고자 할 때, indexOf는 얕은 비교(===)로 동작하기 때문에 객체에 대해서는 사용이 불가능하므로 findIndex를 사용해야함
let objectArr = [
	{name:"안유경"},
	{name: "홍길동"},
];

console.log(objectArr.findIndex(
    (item)=>item.name = "안유경"));

//5. find: 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환함

let arr5=[
    {name:"안유경"},
	{name: "홍길동"},
];

const finded = arr5.find((item)=>item.name==="안유경");

console.log(finded);