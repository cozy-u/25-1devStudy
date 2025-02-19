var Body={
    setColor:function(color){
        //document.querySelector('body').style.color = color;},// javascript로 작성한 코드
        $('body').css('color', color);}, //jQuery로 작성한 코드
      
    setbgColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;}// javascript로 작성한 코드
         $('body').css('backgroundColor', color);}//jQuery로 작성한 코드
}

var Link={
    setColor:function (color){
    // querySelectorAll: <a>태그를 배열 형태로 변환
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
        alist[i].style.color = color;
        i+=1;
    }
}
};

function nightdayHandler(self){
var target = document.querySelector('body');
var alist = document.querySelectorAll('a');

if(self.value==='night'){
    Body.setbgColor('black');
    Body.setColor('white');
    self.value='day';

    Link.setColor('yellow');

}else{
    Body.setbgColor('white');
    Body.setColor('black');
    self.value='night';

    Link.setColor('black');

}
}