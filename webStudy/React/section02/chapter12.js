/*
function sumTask(a, b, callback){
    setTimeout(()=>{
        const sum = a+b;
        callback(sum);
    },3000);
}

sumTask(1,3,(value)=>{console.log(value)});
*/

function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    },3000)
};

function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`; //백틱 
        callback(cooldownedFood);
    },2000);
};

function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`; //백틱 
        callback(freezedFood);
    },1500);
}

orderFood((food)=>{
    console.log(food);
    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood);
        freezeFood(cooldownedFood,(freezedFood)=>{
            console.log(freezedFood);
        });
    });
});



