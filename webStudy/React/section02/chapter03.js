//1. 배열의 구조 분해 할당 - []
let arr = [1,2,3];

let [one, two, three, four=4] = arr;
// 변수 one, two, three에 각각 arr의 요소인 1, 2, 3이 순서대로 할당됨
// 추가로 변수 four에는 기본값으로 4를 설정하여 할당할 수 있음음

console.log(one, two, three, four);

//2. 객체의 구조 분해 할당 - {}
let person = {
    name : "안유경",
    age: 24,
    major: "CSE",
};

let {name, age:myAge, major, year = 4} = person;
//배열의 구조 분해 할당과 동일하지만 중괄호{}를 사용한다는 차이가 있음
// age 프로퍼티의 값을 age라는 변수가 아닌 myAge에 할당하고 싶다면 age:=myAge로 적어주면 됨 
console. log(name, myAge, major, year);


//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, major, year})=>{
    console. log(name, myAge, major, year);
}
//매개 변수를 넘겨줄 때 반드시 객체 구조분해 할당 방식 {}을 이용해야 함.

func(person); //객체(person)를 넘겼을 때만 사용 가능
