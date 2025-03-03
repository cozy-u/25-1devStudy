/*//async: 어떤 함수를 비동기 함수로 만들어주는 키워드
//함수가 프로미스를 반환하도록 해줌

async function getData(){
    return {
        name: "안유경",
        id: "cozyu"
    };
};
//{name: "안유경", id: "cozyu"}라는 객체를 그대로 반환하는 것이 아니라, 이 객체를 결과값으로 갖는 새로운 프로미스를 반환하는 함수가 됨

console.log(getData()); */

async function getData(){
    return new Promise((resolve, reject,)=>{
        setTimeout(()=>{
            resolve({
                name: "안유경",
                id: "cozyu",
            });
        },2000);
    });
};


/*
//await
//async 함수 내부에서만 사용가능한 키워드로, 비동기 함수가 다 처리되기를 기다리는 역할

function printData(){
    getData().then((result)=>{
        console.log(result);
    })
};

printData();
*/

//위의 함수를 async와 await를 사용하여 표현하면 다음과 같이 간단하게 나타낼 수 있음

async function printData(){
    const data = await getData();
    console.log(data);
};
//then 메서드를 쓰지 않아도 알아서 getData()함수가 반환하는 promise가 종료되기를 기다렸다가 종료가 되면 그 객체 값이 바로 변수에 담기게 됨 

printData();