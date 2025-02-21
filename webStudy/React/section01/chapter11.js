//함수
function greeting(){
	function hello(){
    console.log("안녕!");
  }
  hello();  
}

console.log("호출 전");
greeting();
console.log("호출 후");

function getArea(width, height){
    let area = width*height
    return area;
}
console.log(getArea(10,20));

