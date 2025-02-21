//1. if문
let num = 0;

if (num>=10){
    console.log("num은 10 이상입니다.");
    console.log("조건이 참입니다.");
}else if(num>=5){
    console.log("num은 5 이상입니다.");
}else if(num>=3){
    console.log("num은 3 이상입니다.");
}else{
    console.log("조건이 거짓입니다.");
}

//2. switch문
let animal = "cat";

switch(animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("개");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    case "monkey":{
        console.log("원숭이");
        break;
    }
    case "horse":{
        console.log("말");
        break;
    }
    default:{
        console.log("해당되는 동물이 없습니다.");
    }   
}