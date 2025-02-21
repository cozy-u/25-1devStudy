//1. 콜백 함수
function main(value){
    value();
}

function sub(){
    console.log("I am sub function");
}

main(()=>{
    console.log("I am sub function");
});

//2. 콜백 함수의 활용
//구조가 흡사한 함수들이 필요할 때, 중복되는 코드를 발생시키지 않으면서 콜백 함수를 사용할 수 있음
function iteration(cnt, callback){
    for(let i=1;i<=cnt;i++){
        callback(i);
    }
}

iteration(5, function(idx) {
    console.log(idx);
});

iteration(5, function(idx){
    console.log(idx*2);
})