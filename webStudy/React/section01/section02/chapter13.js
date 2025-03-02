/*
const promise = new Promise((resolve, reject)=>{
        //Executor: 수행할 비동기 작업의 콜백함수
        setTimeout(()=>{
            if(typeof num === 'number'){
                resolve(num+10);
            }
            else{
                reject("num이 숫자가 아닙니다.");
            }
        },2000);
    });
    return promise;

//then 메서드
//promise가 resolve되면, executor에서 resolve 함수를 수행한 뒤에 then메서드의 콜백함수를 실행시켜주고, resolve의 인수로 전달한 결과값을 매개변수로 제공해줌 

promise.then((value)=>{console.log(value);});

//catch 메서드
//promise가 reject되면, executor에서 reject 함수를 수행한 뒤에 catch메서드의 콜백함수를 실행시켜주고, reject 함수의 인수로 전달한 결과값을 매개변수로 제공해줌
promise.catch((error)=>{console.log(error)};);

//then 메서드는 호출 결과로 promise 객체를 한 번 더 반환함. => 아래와 같이 표현하는 것이 가능
promise
.then((value)=>{console.log(value)})
.catch((error)=>{console.log(error)});
*/

function add10(num){
    const promise = new Promise((resolve, reject)=>{
        //Executor: 수행할 비동기 작업의 콜백함수
        setTimeout(()=>{
            if(typeof num === 'number'){
                resolve(num+10);
            }
            else{
                reject("num이 숫자가 아닙니다.");
            }
        },2000);
    });
    return promise;
};

add10(0).then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

