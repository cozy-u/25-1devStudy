//1-falsy
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7= 0n;

if(!f1){
    console.log("falsy");
}

//2-truthy
//-> 위의 7가지 경우를 제외한 나머지 모든 값'
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = ()=>{};

//3-활용 사례
function showName(person){
    //if(person.name === undefined || person.name === null)
    if(!person){ //person 값이 truthy value가 아닌 모든 경우에 대하여
        console.log("person의 값이 없음");
        return;
    }   
    console.log(person.name);
}

let person = {name:"안유경"}; //truthy
showName(person);
