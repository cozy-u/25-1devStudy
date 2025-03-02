//5가지 배열 변형 메서드
//1. filter: 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1=[
    {name: "안유경", major: "CSE"},
    {name: "cozyu", major: "CSE"},
    {name: "홍길동", major: "MED"},
];

const CSEstudents = arr1.filter((item)=>item.major==="CSE");

console.log(CSEstudents);

//2. map: 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환
//forEach와 동일하게 매개 변수로 현재요소, 반복 카운트. 원본 배열을 전달

let arr2 = [1,2,3];
const mapResults = arr2.map((item,idx,arr)=>
{console.log(idx, item);
    return item*2;
});
console.log(mapResults);

//ex: arr1의 이름만 모아서 새로운 배열로 반환 
let names = arr1.map((item)=>item.name);
console.log(names);

//3. sort: 배열을 사전순으로 정렬하는 메서드
// 만약 정렬하고자 하는 배열의 요소가 숫자값인 경우엔 동작하지 않기 때문에 콜백함수로 기준을 설정해주어야 함
let arr3 = ["b", "a", "c"];
console.log(arr3.sort());

let arr4 = [10,4,7];
console.log(arr4.sort((a,b)=>{ //오름차순 정렬시
    if(a>b) return 1; //b가 a앞에 위치 => b, a 순
    else if(a<b) return -1;//a가 b앞에 위치 => a, b 순 
    else return 0; //자리를 바꾸지 않음 
}));

//4. toSorted: 기존의 배열을 정렬한 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

//5. join: 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr7=["hi", "I'm", "cozyu"];
const joined = arr7.join(" "); // 구분자는 default로 콤마(,) 직접 지정해서 변경할 수 있음
console.log(joined);