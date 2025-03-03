//math 모듈
//ES 모듈 시스템: export 키워드 사용
//방법 1
/*
function add(a,b){
    return a +b;
}

function sub(a,b){
    return a- b;
}

export{add,sub};
*/

//방법2

export function add(a,b){
    return a +b;
}

export function sub(a,b){
    return a- b;
}

export default function multiply(a,b){
    return a*b;
}

