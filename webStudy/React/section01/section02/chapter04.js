//1. Spread 연산자: ...
//객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
//만약 arr2에 [4,1,2,3,5,6] 순서대로 넣고 싶다면 let arr2 = [4, arr[0], arr[1], arr[2], 5, 6]; 을 사용해도 되지만 배열 arr[1]의 값이 변경될 수 있음

let arr2 = [4, ...arr1, 5, 6];
//-> Spread 연산자를 이용하면
//let arr2 = [4,...arr1, 5, 6];으로 작성해주면 됨

console.log(arr2);

let obj1 = {
    a:1,
    b:2,
}
let obj2 = {
    ...obj1,
    c:3,
    d:4,
}

console.log(obj2);

function funcA(p1,p2,p3){
    console.log(p1,p2,p3);
}

funcA(...arr1);

//2. Rest 매개변수
// 여러 개의 매개변수를 받아와야할 때 배열 형태로 여러 개의 매개변수를 받아올 수 있음 

function funcB(one,...rest){
    console.log(rest);
}
//변수 one에는 arr1[0]이 들어가고 rest에 배열형태로 나머지 arr1[1]부터 저장됨
//rest 매개변수 앞에는 추가로 매개변수를 더 선언할 수 있지만 뒤에는 선언 불가 

funcB(...arr1);